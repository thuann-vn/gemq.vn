<?php

namespace App\Http\Controllers;

use App\Models\Blog\Post;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Inertia\Inertia;
use TOC\MarkupFixer;
use TOC\TocGenerator;

class BlogController extends Controller
{
    public function index()
    {
        $query = Post::with('category', 'tags', 'author')->where('published_at', '<=', date('Y-m-d'))->orderBy('created_at', 'desc');

        $posts = $query->paginate(10);

        //Seo information
        SEOMeta::setTitleDefault(getGeneralSettings('site_name'));
        SEOTools::setTitle(__('Tin tức chuyên ngành'));
        SEOTools::setDescription(getGeneralSettings('site_description'));
        SEOMeta::setTitle(__('Tin tức chuyên ngành'));

        return Inertia::render('Blog/Index', compact('posts'));
    }

    public function show($slug)
    {
        $post = Post::with('category', 'tags', 'author')->whereSlug($slug)->firstOrFail();
        $relatedPosts = Post::where('blog_category_id', $post->blog_category_id)->where('id', '!=', $post->id)->orderByDesc('published_at')->limit(3)->get();
        $markupFixer = new MarkupFixer();
        $tocGenerator = new TocGenerator();

        $content = $markupFixer->fix($post->content ?? '');
        // This generates the Table of Contents in HTML
        $toc = "<div class='toc'>" . $tocGenerator->getHtmlMenu($content) . '</div>';

        //Seo information
        SEOTools::setTitle($post->seo_title ?? $post->title ?? getGeneralSettings('site_name'));
        SEOTools::setDescription($post->seo_description ?? '');
        SEOMeta::setTitle($post->seo_title ?? $post->title ?? getGeneralSettings('site_name'));
        SEOMeta::setKeywords($post->seo_keywords ?? '');
        SEOTools::addImages($post->image);
        \View::share('seoSchema', $post->seo_schema ?? '');

        return Inertia::render('Blog/Detail', compact('post', 'relatedPosts', 'content', 'toc'));
    }
}
