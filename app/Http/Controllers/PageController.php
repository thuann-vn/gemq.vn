<?php

namespace App\Http\Controllers;

use App\Models\Blog\Post;
use App\Models\Page;
use App\Models\Shop\Category;
use App\Models\Shop\Product;
use App\Settings\GeneralSettings;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Statikbe\FilamentFlexibleContentBlocks\ContentBlocks\AbstractContentBlock;
use Statikbe\FilamentFlexibleContentBlocks\Models\Contracts\HasContentBlocks;

class PageController extends Controller
{
    public function homePage()
    {
        return $this->show(Page::whereCode('home')->first());
    }

    public function show(Page $page)
    {
        if (! $page->isPublished()) {
            return abort(Response::HTTP_NOT_FOUND);
        }

        //Seo information
        $generalSettings = new GeneralSettings();
        SEOMeta::setTitleDefault($generalSettings->site_name);
        SEOTools::setTitle($page->getSEOTitle() ?? $generalSettings->site_name);
        SEOTools::setDescription($page->getSEODescription());
        SEOMeta::setTitle($page->getSEOTitle() ?? $generalSettings->site_name);
        SEOMeta::setKeywords($page->seo_keywords);
        SEOTools::addImages($page->getSEOImageUrl());

        $blocks = $this->createBlocks($page);
        $pageTitle = $page->title;
        $isHomePage = $page->code == 'home';
        $slug = $page->slug;

        return Inertia::render('Page/Show', compact('page', 'slug', 'blocks', 'pageTitle', 'isHomePage'));
    }

    /**
     * Transforms the JSON block data into content block components that can be rendered.
     *
     * @return array<AbstractContentBlock>
     */
    private function createBlocks(HasContentBlocks $page): array
    {
        $blockClasses = $page::registerContentBlocks();
        $blockClassIndex = collect($blockClasses)->mapWithKeys(fn ($item, $key) => [$item::getName() => $item]);
        $blocks = [];

        foreach ($page->content_blocks as $blockData) {
            if ($blockClassIndex->has($blockData['type'])) {
                $blockClass = $blockClassIndex->get($blockData['type']);
                $block = new $blockClass($page, $blockData['data']);
                $block->name = $block->getName();
                unset($block->record);
                $blocks[] = $block;
            }
        }

        return $blocks;
    }

    public function generateSitemap()
    {
        $siteMap = Sitemap::create();
        $siteMap->add(route('home'));

        $pages = Page::all();
        foreach ($pages as $page) {
            $siteMap->add(route('page.detail', $page->slug));
        }

        $siteMap->add(route('shop.index'));

        $products = Product::whereIsVisible(true)->get();
        foreach ($products as $product) {
            $siteMap->add(route('shop.detail', $product->slug));
        }

        $projects = Category::whereIsVisible(true)->get();
        foreach ($projects as $project) {
            $siteMap->add(route('shop.category', $project->slug));
        }
        $siteMap->add(route('blog'));
        $blogPosts = Post::where('published_at', '<=', now())->get();
        foreach ($blogPosts as $post) {
            $siteMap->add(route('blog.detail', $post->slug));
        }

        $siteMap->writeToFile(public_path('sitemap.xml'));

        return response()->file(public_path('sitemap.xml'));
    }
}
