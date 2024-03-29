import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

export default function CallNow() {
    const {general_settings} = usePage<PageProps>().props;
    return (
        <>
            <div className="nestlab_callnow">
                <a className="nestlab_callnow_action" href={"tel:" + general_settings.site_phone}><img width="50"
                                                                                                       height="50"
                                                                                                       src="/images/icon-phone.svg"
                                                                                                       data-ll-status="loaded"
                                                                                                       className="entered lazyloaded"/>
                </a>
                <div className="nestlab_callnow_fill"></div>
                <div className="nestlab_callnow_border"></div>
            </div>

            <div className="nestlab-zalo">
                <a href={"https://zalo.me/" + general_settings.site_phone} className="buttonzalo" target="_blank"
                   rel="noopener noreferrer"><img width="50" height="50" src="/images/logozalo.svg"
                                                  alt={"zalo " + general_settings.site_name}/>
                </a>
            </div>
        </>
    )
}
