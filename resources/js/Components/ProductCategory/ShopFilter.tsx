import {Link, usePage} from "@inertiajs/react";
import {PageProps, ProductCategory} from "@/types";
import {classNames, imageStorageUrl} from "@/Utils/Helper";
import {useTranslation} from "react-i18next";

export default function ShopFilter({category}: { category?: ProductCategory }) {
    const {t} = useTranslation()
    const {all_categories, featured_posts} = usePage<PageProps>().props

    return (
        <div className={"hidden md:block"}>
            <section>
                <h3 className={"uppercase px-2 py-2 font-bold bg-main-600 text-white"}>{t('Dịch vụ nổi bật')}</h3>
                <ul role="list"
                    className="space-y-4 pb-6 text-sm font-medium text-gray-900">
                    {all_categories.map((cat: { name: string; slug: any; id: any; }) => (
                        <li key={cat.name} className={"px-2 py-4 border-b !mt-0"}>
                            <Link
                                href={route('shop.category', {slug: cat.slug})}
                                className={classNames("capitalize", cat.id == category?.id ? 'font-bold text-main-600' : '')}>
                                {cat.name.toLowerCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className={"uppercase px-2 py-2 font-bold bg-main-600 text-white"}>{t('TIN TỨC NỔI BẬT')}</h3>
                <ul role="list"
                    className="space-y-4 pb-6 text-sm font-medium text-gray-900">
                    {featured_posts.map((post, index) => (
                        <li key={post.title} className={"px-2 py-4 border-b !mt-0"}>
                            <Link
                                href={route('blog.detail', {slug: post.slug})}
                                className={classNames("capitalize flex")}>
                                <img className={"w-20 h-16 me-3 object-cover"} src={imageStorageUrl(post.image)}
                                     alt={post.title}/>
                                {post.title.toLowerCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
