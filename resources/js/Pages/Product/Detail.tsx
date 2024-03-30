import {useState} from 'react'
import Breadcrumb from "@/Components/Other/Breadcrumb";
import AppHead from "@/Components/Layout/AppHead";
import {BlogPost, Product, ProductCategory, ProductCollection} from "@/types";
import ShopFilter from "@/Components/ProductCategory/ShopFilter";
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

export default function Detail({product, allCategories, featuredPosts, content, toc}: {
    product: Product,
    allCategories: ProductCategory[],
    products: ProductCollection,
    featuredPosts: BlogPost[],
    content: string,
    toc: string
}) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const breadcrumbs = [
        {id: 1, name: 'Trang chủ', href: '/'},
        {id: 2, name: product.name},
    ]
    const {t} = useTranslation()
    const shareUrl = route('shop.category', product.slug)
    return (
        <>
            <AppHead title={product?.name ?? 'Dự án'}/>
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <Breadcrumb breadcrumbs={breadcrumbs}/>
                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">
                                {product.name}
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-4">
                                {/* Filters */}
                                <ShopFilter
                                />

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <div className="flex items-center justify-between pb-6">
                                        <h1 className="text-4xl font-bold tracking-tight text-main-600">
                                            {product?.name ?? 'Dịch vụ'}
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
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
