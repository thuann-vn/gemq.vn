import * as React from 'react'
import {useState} from 'react'
import Breadcrumb from "@/Components/Other/Breadcrumb";
import AppHead from "@/Components/Layout/AppHead";
import {ProductCollection} from "@/types";
import ShopFilter from "@/Components/ProductCategory/ShopFilter";
import {useTranslation} from "react-i18next";
import ProductCard from "@/Components/Products/ProductCard";
import Pagination from "@/Components/Other/Pagination";

export default function Category({products}: { products: ProductCollection }) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const {t} = useTranslation()
    const breadcrumbs = [
        {id: 1, name: 'Trang chủ', href: '/'},
        {id: 2, name: t('Dự án')},
    ]
    return (
        <>
            <AppHead title={'Dự án'}/>
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <Breadcrumb breadcrumbs={breadcrumbs}/>
                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-4">
                                {/* Filters */}
                                <ShopFilter
                                />

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    <div className="grid sm:grid-cols-3 gap-y-8 gap-x-3 pb-6">
                                        {
                                            products.data.map(product => (
                                                <ProductCard product={product} contentContainerClass={"!px-0"}/>))
                                        }
                                    </div>

                                    <Pagination data={products}/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
