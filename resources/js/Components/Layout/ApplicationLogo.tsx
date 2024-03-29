import {Link, usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

export default function ApplicationLogo() {
    const {general_settings} = usePage<PageProps>().props;
    return (
        <Link href={route('home')}>
            <span className="sr-only">{general_settings.site_name}</span>
            <img
                className="h-16 md:h-20 w-auto"
                src={general_settings.site_logo}
                alt={general_settings.site_name}
            />
        </Link>
    );
}
