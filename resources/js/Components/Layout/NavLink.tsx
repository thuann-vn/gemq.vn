import {InertiaLinkProps, Link} from '@inertiajs/react';
import {classNames, imageStorageUrl} from "@/Utils/Helper";

export default function NavLink({ active = false, className = '', icon = '', label = '', children, ...props }: InertiaLinkProps & { active: boolean, icon: string | null, label: string }) {
    return (
        <Link
            {...props}
            className={
                classNames("flex items-center font-medium text-main-600 hover:text-white hover:bg-main-600 px-4 py-3 rounded-full",
                    className,
                    active ? 'bg-main-100 text-main-500' : ''
                )
            }
        >
            {
                icon ? (
                    <img src={imageStorageUrl(icon)} alt={label}
                         className="h-5 w-5 mr-1"/>
                ) : null
            }
            {label}
        </Link>
    );
}
