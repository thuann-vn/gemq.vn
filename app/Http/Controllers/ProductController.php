<?php

namespace App\Http\Controllers;

use App\Models\Shop\Category;
use App\Models\Shop\Product;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;
use TOC\MarkupFixer;
use TOC\TocGenerator;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::whereIsVisible(true)->where('published_at', '<=', now())->orderBy('published_at', 'desc')->paginate(12);

        //Seo information
        SEOMeta::setTitleDefault(getGeneralSettings('site_name'));
        SEOTools::setTitle(__('Dự án'));
        SEOTools::setDescription(getGeneralSettings('site_description'));
        SEOMeta::setTitle(__('Dự án'));

        $allCategories = Category::whereIsVisible(true)->whereParentId(null)->get();
        $featuredPosts = \App\Models\Blog\Post::where('is_featured', true)->limit(5)->get();

        return Inertia::render('Product/Index', compact('products', 'allCategories', 'featuredPosts'));
    }

    public function category(Request $request)
    {
        $slug = $request->slug;
        $category = null;
        if (!empty($slug)) {
            $category = Category::where('slug', $slug)->first();
        }

        $markupFixer = new MarkupFixer();
        $tocGenerator = new TocGenerator();

        // This ensures that all header tags have `id` attributes so they can be used as anchor links
        $content = $markupFixer->fix($category->description ?? '');

        // This generates the Table of Contents in HTML
        $toc = "<div class='toc'>" . $tocGenerator->getHtmlMenu($content) . '</div>';

        //Seo information
        SEOTools::setTitle($category->seo_title ?? $category->name ?? getGeneralSettings('site_name'));
        SEOTools::setDescription($category->seo_description ?? '');
        SEOMeta::setTitle($category->seo_title ?? $category->name ?? getGeneralSettings('site_name'));
        SEOMeta::setKeywords($category->seo_description);
        SEOTools::addImages($category->image);

        return Inertia::render('Product/Category', compact('category', 'content', 'toc'));
    }

    public function detail($slug)
    {
        $product = \App\Models\Shop\Product::with(['brand', 'productAttributes', 'variants', 'variants.attributeOptions'])->where('slug', $slug)->firstOrFail();
        $firstCategory = $product->categories()->first();
        $images = $product->media()->get();

        //Related products
        $relatedProducts = \App\Models\Shop\Product::where('id', '!=', $product->id)->limit(5)->get();

        // This ensures that all header tags have `id` attributes so they can be used as anchor links
        $markupFixer = new MarkupFixer();
        $tocGenerator = new TocGenerator();

        $content = $markupFixer->fix($product->content ?? '');

        // This generates the Table of Contents in HTML
        $toc = "<div class='toc'>" . $tocGenerator->getHtmlMenu($content) . '</div>';

        //Seo information
        SEOTools::setTitle($product->seo_title ?? $product->name ?? getGeneralSettings('site_name'));
        SEOTools::setDescription($product->seo_description ?? '');
        SEOMeta::setTitle($product->seo_title ?? $product->name ?? getGeneralSettings('site_name'));
        SEOMeta::setKeywords($product->seo_description);
        SEOTools::addImages($product->featured_image_url);

        return Inertia::render('Product/Detail', compact('product', 'images', 'relatedProducts', 'firstCategory', 'content', 'toc'));
    }

    /**
     * Get available option when user select attribute option
     * Eg: User select color: red
     * Then we will get all available options for size attribute that have red color
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAvailableProductVariants(Request $request)
    {
        $productId = $request->product_id;
        $selectedOptions = array_map('intval', $request->selected_options);
        $attributeId = $request->attribute_id;
        $product = \App\Models\Shop\Product::with(['variants', 'variants.attributeOptions'])->whereId($productId)->firstOrFail();
        $productVariants = $product->variants()->get();
        $productOptions = [];
        foreach ($productVariants as $key => $productVariant) {
            $isAvailable = false;
            foreach ($productVariant->attributeOptions as $attributeOption) {
                if (in_array($attributeOption->shop_attribute_option_id, $selectedOptions)) {
                    $isAvailable = true;

                    break;
                }
            }
            if ($isAvailable) {
                foreach ($productVariant->attributeOptions as $attributeOption) {
                    if ($attributeOption->shop_attribute_id != $attributeId) {
                        $productOptions[$attributeOption->shop_attribute_id][$attributeOption->shop_attribute_option_id] = [
                            'name' => $attributeOption->option->value,
                            'in_stock' => $productVariant->qty,
                        ];
                    }
                }
            }
        }

        //Get selected variant if all options are selected
        $selectedVariant = null;
        if (count($selectedOptions) == count($product->productAttributes)) {
            foreach ($productVariants as $key => $productVariant) {
                $isAvailable = true;
                foreach ($productVariant->attributeOptions as $attributeOption) {
                    if (!in_array($attributeOption->shop_attribute_option_id, $selectedOptions)) {
                        $isAvailable = false;

                        break;
                    }
                }
                if ($isAvailable) {
                    $selectedVariant = $productVariant;

                    break;
                }
            }
        }

        return response()->json([
            'product_options' => $productOptions,
            'selected_variant' => $selectedVariant,
        ]);
    }

    public function search()
    {
        if (request()->has('q') && !empty(request()->get('q'))) {
            $products = \App\Models\Shop\Product::with(['brand']);
            $products = $products->where('name', 'like', '%' . request()->get('q') . '%');

            return response()->json($products->get());
        } else {
            return response()->json([]);
        }
    }
}
