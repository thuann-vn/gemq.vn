import {BlogPost} from '@/types';
import AppHead from "@/Components/Layout/AppHead";
import Pagination from "@/Components/Other/Pagination";
import ShopFilter from "@/Components/ProductCategory/ShopFilter";
import {useTranslation} from "react-i18next";
import Breadcrumb from "@/Components/Other/Breadcrumb";
import BlogCard from "@/Components/Blog/BlogCard";

interface Props {
    posts: { data: BlogPost[], links: any[] }
}

export default function BlogIndex({posts}: Props) {
    const {t} = useTranslation()
    const breadcrumbs = [
        {id: 1, name: 'Trang chủ', href: '/'},
        {id: 2, name: t('Tin tức chuyên ngành')},
    ]
    return (
        <>
            <AppHead title={t('Tin tức')}/>
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumb breadcrumbs={breadcrumbs}/>
                <div className={"grid grid-cols-1 gap-x-8 lg:grid-cols-4 gap-4 mt-12"}>
                    <ShopFilter/>
                    <div className="col-span-3">
                        <div className={" grid md:grid-cols-3 gap-3"}>
                            {
                                posts.data.map((post, key) => (
                                    <BlogCard post={post} key={key}/>
                                ))
                            }
                        </div>
                        <div className={"my-10"}>
                            <Pagination data={posts}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
