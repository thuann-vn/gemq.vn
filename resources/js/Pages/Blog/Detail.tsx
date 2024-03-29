import {BlogPost, PageProps} from '@/types';
import AppHead from "@/Components/Layout/AppHead";
import BlogCard from "@/Components/Blog/BlogCard";
import ShopFilter from "@/Components/ProductCategory/ShopFilter";
import Breadcrumb from "@/Components/Other/Breadcrumb";
import {useTranslation} from "react-i18next";
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";

export default function BlogSingle({post, relatedPosts, content, toc}: PageProps<{
    post: BlogPost,
    relatedPosts: BlogPost[],
    content: string,
    toc: string
}>) {
    const {t} = useTranslation()
    const breadcrumbs = [
        {id: 1, name: 'Trang chủ', href: '/'},
        {id: 2, name: t('Tin tức chuyên ngành')},
    ]
    const shareUrl = route('blog.detail', post.slug)
    return (
        <>
            <AppHead title={post.title}/>
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumb breadcrumbs={breadcrumbs}/>
                <div className={"grid grid-cols-1 gap-x-8 lg:grid-cols-4 gap-4 mt-12"}>
                    <ShopFilter/>
                    <div className={"col-span-3"}>
                        <article>
                            <div className="flex items-center justify-between pb-6">
                                <h1 className="text-4xl font-bold tracking-tight text-main-600">
                                    {post?.title ?? 'Dịch vụ'}
                                </h1>
                            </div>
                            <div className={"page-toc"}>
                                <p className={"font-bold mb-3 text-lg"}>{t('Nội dung bài viết')}</p>
                                <div dangerouslySetInnerHTML={{__html: toc}}></div>
                            </div>
                            <div className={"page-content"} dangerouslySetInnerHTML={{__html: content}}></div>

                            <div className="my-10">
                                <p className={"font-bold mb-3"}>{t('Chia sẻ:')}</p>
                                <div className="sm:flex gap-2">
                                    <FacebookShareButton url={shareUrl}>
                                        <FacebookIcon size={48} round={true}/>
                                    </FacebookShareButton>
                                    <LinkedinShareButton url={shareUrl}>
                                        <LinkedinIcon size={48} round={true}/>
                                    </LinkedinShareButton>
                                    <FacebookMessengerShareButton url={shareUrl} appId={""}>
                                        <FacebookMessengerIcon size={48} round={true}/>
                                    </FacebookMessengerShareButton>
                                    <TelegramShareButton url={shareUrl}>
                                        <TelegramIcon size={48} round={true}/>
                                    </TelegramShareButton>
                                    <TwitterShareButton url={shareUrl}>
                                        <TwitterIcon size={48} round={true}/>
                                    </TwitterShareButton>
                                    <ViberShareButton url={shareUrl}>
                                        <ViberIcon size={48} round={true}/>
                                    </ViberShareButton>
                                    <WhatsappShareButton url={shareUrl}>
                                        <WhatsappIcon size={48} round={true}/>
                                    </WhatsappShareButton>
                                </div>
                            </div>
                        </article>

                        {
                            relatedPosts.length > 0 ? (
                                <>
                                    <div className="w-fit mx-auto mt-10 flex space-x-2">
                                        <div className="h-0.5 w-2 bg-gray-600"></div>
                                        <div className="h-0.5 w-32 bg-gray-600"></div>
                                        <div className="h-0.5 w-2 bg-gray-600"></div>
                                    </div>

                                    <aside aria-label="Related Articles"
                                           className="mx-auto mt-10 max-w-screen-xl">
                                        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">{t('Bài viết liên quan')}</h2>
                                        <div
                                            className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
                                            {
                                                relatedPosts.map((post, key) => (
                                                    <BlogCard post={post} key={key}/>
                                                ))
                                            }
                                        </div>
                                    </aside>
                                </>
                            ) : null
                        }
                    </div>
                </div>
            </div>

        </>
    );
}
