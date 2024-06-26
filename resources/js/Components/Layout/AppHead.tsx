import {Head, usePage} from '@inertiajs/react'
import {PropsWithChildren} from "react";
import {PageProps} from "@/types";

const AppHead = ({ title, children } : {title: string, children?: PropsWithChildren}) => {
    const { general_settings } = usePage<PageProps>().props;
    return (
        <Head>
            <title>{title ? `${title}` : general_settings.site_name}</title>
            <meta name="description" content={general_settings.site_description} />
            <meta name="keywords" content={general_settings.site_keywords} />
            {/*<meta name="author" content={general_settings.site_author} />*/}
            <link rel="icon" href={general_settings.site_favicon} />
        </Head>
    )
}

export default AppHead
