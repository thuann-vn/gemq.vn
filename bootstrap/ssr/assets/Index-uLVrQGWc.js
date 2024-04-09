import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {useState} from "react";
import {B as Breadcrumb, S as ShopFilter} from "./Breadcrumb-IoDJqHVM.js";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import {useTranslation} from "react-i18next";
import {P as ProductCard} from "./ProductCard-nQ--h5D2.js";
import {P as Pagination} from "./Pagination-xbXeNdb2.js";
import "@inertiajs/react";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";
import "./CartContext-OwhgCTII.js";

function Category({products}) {
    useState(false);
    const {t} = useTranslation();
    const breadcrumbs = [
        {id: 1, name: "Trang chủ", href: "/"},
        {id: 2, name: t("Dự án")}
    ];
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: "Dự án"}),
            /* @__PURE__ */ jsx("div", {
                className: "bg-white", children: /* @__PURE__ */ jsx("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", {
                        children: [
                            /* @__PURE__ */ jsx(Breadcrumb, {breadcrumbs}),
                            /* @__PURE__ */ jsx("section", {
                                "aria-labelledby": "products-heading",
                                className: "pb-24 pt-6",
                                children: /* @__PURE__ */ jsxs("div", {
                                    className: "grid grid-cols-1 gap-x-8 lg:grid-cols-4", children: [
                                        /* @__PURE__ */ jsx(
                                            ShopFilter,
                                            {}
                                        ),
                                        /* @__PURE__ */ jsxs("div", {
                                            className: "lg:col-span-3", children: [
                                                /* @__PURE__ */ jsx("div", {className: "grid sm:grid-cols-3 gap-y-8 gap-x-3 pb-6",
                                                    children: products.data.map((product) => /* @__PURE__ */ jsx(ProductCard, {
                                                        product,
                                                        contentContainerClass: "!px-0"
                                                    }))
                                                }),
                                                /* @__PURE__ */ jsx(Pagination, {data: products})
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
export {
    Category as default
};
