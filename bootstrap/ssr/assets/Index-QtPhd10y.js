import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import {P as Pagination} from "./Pagination-xbXeNdb2.js";
import {B as Breadcrumb, S as ShopFilter} from "./Breadcrumb-IoDJqHVM.js";
import {useTranslation} from "react-i18next";
import {B as BlogCard} from "./BlogCard-_irUPyNf.js";
import "@inertiajs/react";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";

function BlogIndex({posts}) {
    const {t} = useTranslation();
    const breadcrumbs = [
        {id: 1, name: "Trang chủ", href: "/"},
        {id: 2, name: t("Tin tức chuyên ngành")}
    ];
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: t("Tin tức")}),
            /* @__PURE__ */ jsxs("div", {
                className: "container  mx-auto px-4 sm:px-6 lg:px-8", children: [
                    /* @__PURE__ */ jsx(Breadcrumb, {breadcrumbs}),
                    /* @__PURE__ */ jsxs("div", {
                        className: "grid grid-cols-1 gap-x-8 lg:grid-cols-4 gap-4 mt-12", children: [
                            /* @__PURE__ */ jsx(ShopFilter, {}),
                            /* @__PURE__ */ jsxs("div", {
                                className: "col-span-3", children: [
                                    /* @__PURE__ */ jsx("div", {
                                        className: " grid md:grid-cols-3 gap-3",
                                        children: posts.data.map((post, key) => /* @__PURE__ */ jsx(BlogCard, {post}, key))
                                    }),
                                    /* @__PURE__ */ jsx("div", {
                                        className: "my-10",
                                        children: /* @__PURE__ */ jsx(Pagination, {data: posts})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
export {
    BlogIndex as default
};
