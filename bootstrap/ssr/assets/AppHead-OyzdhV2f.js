import {jsxs, jsx} from "react/jsx-runtime";
import {usePage, Head} from "@inertiajs/react";

const AppHead = ({title, children}) => {
    const {general_settings} = usePage().props;
    return /* @__PURE__ */ jsxs(Head, {
        children: [
            /* @__PURE__ */ jsx("title", {children: title ? `${title}` : general_settings.site_name}),
            /* @__PURE__ */ jsx("meta", {name: "description", content: general_settings.site_description}),
            /* @__PURE__ */ jsx("meta", {name: "keywords", content: general_settings.site_keywords}),
            /* @__PURE__ */ jsx("link", {rel: "icon", href: general_settings.site_favicon})
        ]
    });
};
const AppHead$1 = AppHead;
export {
    AppHead$1 as A
};
