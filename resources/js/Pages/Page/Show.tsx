import {PageProps, ProductCategory} from '@/types';
import AppHead from "@/Components/Layout/AppHead";
import {Block} from "@/types/blocks";
import PageBlock from "@/Components/PageBlocks/PageBlock";
import Breadcrumb from "@/Components/Other/Breadcrumb";
import ShopFilter from "@/Components/ProductCategory/ShopFilter";
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
import {useTranslation} from "react-i18next";

export default function PageSingle({pageTitle, isHomePage, blocks, slug, category}: PageProps<{
    pageTitle: string,
    content: string,
    slug: string,
    isHomePage: boolean,
    blocks: Block[],
    category: ProductCategory
}>) {
    const breadcrumbs = [
        {id: 1, name: 'Trang chủ', href: '/'},
        {id: 2, name: pageTitle},
    ]
    const {t} = useTranslation()
    const shareUrl = route('page.detail', slug)

    return (
        <>
            <AppHead title= {pageTitle}/>
            {
                !isHomePage ? (
                    <>
                        <AppHead title={pageTitle}/>
                        <div className="bg-white">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div>
                                    <Breadcrumb breadcrumbs={breadcrumbs}/>
                                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                                        <h2 id="products-heading" className="sr-only">
                                            {pageTitle}
                                        </h2>

                                        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-4">
                                            {/* Filters */}
                                            <ShopFilter
                                                category={category}
                                            />

                                            {/* Product grid */}
                                            <div className="lg:col-span-3 page-content">
                                                {
                                                    blocks.map((block, index) => (
                                                        <PageBlock block={block} key={index}/>
                                                    ))
                                                }
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
                ) : (
                    <div className={"page-content"}>
                        {
                            blocks.map((block, index) => (
                                <PageBlock block={block} key={index}/>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}
