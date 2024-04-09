import {useState} from 'react'
import Breadcrumb from "@/Components/Other/Breadcrumb";
import AppHead from "@/Components/Layout/AppHead";
import {ProductCategory, ProductCollection} from "@/types";
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

export default function Category({category, content, toc}: {
    category: ProductCategory,
    products: ProductCollection,
    content: string,
    toc: string
}) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const breadcrumbs = [
        {id: 1, name: 'Trang chủ', href: '/'},
    ]
    if (category.parent) {
        breadcrumbs.push(
            {id: 2, name: category.parent.name, href: route('shop.category', category.parent.slug)}
        )
    }
    breadcrumbs.push({id: 2, name: category.name, href: ''})
    const {t} = useTranslation()
    const shareUrl = route('shop.category', category.slug)
    return (
        <>
            <AppHead title={category?.name ?? 'Dịch vụ'}/>
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <Breadcrumb breadcrumbs={breadcrumbs}/>
                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">
                                {category.name}
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-4">
                                {/* Filters */}
                                <ShopFilter
                                    category={category}
                                />

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <div className="flex items-center justify-between pb-6">
                                        <h1 className="text-4xl font-bold tracking-tight text-main-600">
                                            {category?.name ?? 'Dịch vụ'}
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
