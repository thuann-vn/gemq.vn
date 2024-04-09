import {jsx, jsxs} from "react/jsx-runtime";
import {Link, usePage} from "@inertiajs/react";
import {c as classNames, i as imageStorageUrl} from "./Helper-fobfuv7J.js";
import {useTranslation} from "react-i18next";

function ShopFilter({category}) {
    const {t} = useTranslation();
    const {all_categories, featured_posts} = usePage().props;
    return /* @__PURE__ */ jsxs("div", {
        className: "hidden md:block", children: [
            /* @__PURE__ */ jsxs("section", {
                children: [
                    /* @__PURE__ */ jsx("h3", {
                        className: "uppercase px-2 py-2 font-bold bg-main-600 text-white",
                        children: t("Dịch vụ nổi bật")
                    }),
                    /* @__PURE__ */ jsx(
                        "ul",
                        {
                            role: "list",
                            className: "space-y-4 pb-6 text-sm font-medium text-gray-900",
                            children: all_categories.map((cat) => /* @__PURE__ */ jsx("li", {
                                className: "px-2 py-4 border-b !mt-0", children: /* @__PURE__ */ jsx(
                                    Link,
                                    {
                                        href: route("shop.category", {slug: cat.slug}),
                                        className: classNames("capitalize", cat.id == (category == null ? void 0 : category.id) ? "font-bold text-main-600" : ""),
                                        children: cat.name.toLowerCase()
                                    }
                                )
                            }, cat.name))
                        }
                    )
                ]
            }),
            /* @__PURE__ */ jsxs("section", {
                children: [
                    /* @__PURE__ */ jsx("h3", {
                        className: "uppercase px-2 py-2 font-bold bg-main-600 text-white",
                        children: t("TIN TỨC NỔI BẬT")
                    }),
                    /* @__PURE__ */ jsx(
                        "ul",
                        {
                            role: "list",
                            className: "space-y-4 pb-6 text-sm font-medium text-gray-900",
                            children: featured_posts.map((post, index) => /* @__PURE__ */ jsx("li", {
                                className: "px-2 py-4 border-b !mt-0", children: /* @__PURE__ */ jsxs(
                                    Link,
                                    {
                                        href: route("blog.detail", {slug: post.slug}),
                                        className: classNames("capitalize flex"),
                                        children: [
                                            /* @__PURE__ */ jsx(
                                                "img",
                                                {
                                                    className: "w-20 h-16 me-3 object-cover",
                                                    src: imageStorageUrl(post.image),
                                                    alt: post.title
                                                }
                                            ),
                                            post.title.toLowerCase()
                                        ]
                                    }
                                )
                            }, post.title))
                        }
                    )
                ]
            })
        ]
    });
}

function Breadcrumb({breadcrumbs}) {
    return /* @__PURE__ */ jsx("nav", {
        "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsx(
            "ol",
            {
                role: "list",
                className: "mx-auto flex items-center space-x-2 mt-6 bg-main-50 px-5 py-2",
                children: breadcrumbs.map((breadcrumb) => /* @__PURE__ */ jsx("li", {
                    children: breadcrumb.href ? /* @__PURE__ */ jsxs("div", {
                        className: "flex items-center", children: [
                            /* @__PURE__ */ jsx(
                                Link,
                                {
                                    href: breadcrumb.href,
                                    className: "mr-2 text-sm font-medium text-main-600 hover:text-main-500",
                                    children: breadcrumb.name
                                }
                            ),
                            /* @__PURE__ */ jsx(
                                "svg",
                                {
                                    width: 16,
                                    height: 20,
                                    viewBox: "0 0 16 20",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    className: "h-5 w-4 text-gray-300",
                                    children: /* @__PURE__ */ jsx("path", {d: "M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"})
                                }
                            )
                        ]
                    }) : /* @__PURE__ */ jsx(
                        "span",
                        {
                            "aria-current": "page",
                            className: "text-sm font-medium text-gray-600",
                            children: breadcrumb.name
                        }
                    )
                }, breadcrumb.id))
            }
        )
    });
}

export {
    Breadcrumb as B,
    ShopFilter as S
};
