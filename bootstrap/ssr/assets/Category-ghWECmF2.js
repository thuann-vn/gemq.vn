import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {useState} from "react";
import {B as Breadcrumb, S as ShopFilter} from "./Breadcrumb-IoDJqHVM.js";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import {useTranslation} from "react-i18next";
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import "@inertiajs/react";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";

function Category({category, content, toc}) {
    useState(false);
    const breadcrumbs = [
        {id: 1, name: "Trang chủ", href: "/"}
    ];
    if (category.parent) {
        breadcrumbs.push(
            {id: 2, name: category.parent.name, href: route("shop.category", category.parent.slug)}
        );
    }
    breadcrumbs.push({id: 2, name: category.name, href: ""});
    const {t} = useTranslation();
    const shareUrl = route("shop.category", category.slug);
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: (category == null ? void 0 : category.name) ?? "Dịch vụ"}),
            /* @__PURE__ */ jsx("div", {
                className: "bg-white", children: /* @__PURE__ */ jsx("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", {
                        children: [
                            /* @__PURE__ */ jsx(Breadcrumb, {breadcrumbs}),
                            /* @__PURE__ */ jsxs("section", {
                                "aria-labelledby": "products-heading", className: "pb-24 pt-6", children: [
                                    /* @__PURE__ */ jsx("h2", {
                                        id: "products-heading",
                                        className: "sr-only",
                                        children: category.name
                                    }),
                                    /* @__PURE__ */ jsxs("div", {
                                        className: "grid grid-cols-1 gap-x-8 lg:grid-cols-4", children: [
                                            /* @__PURE__ */ jsx(
                                                ShopFilter,
                                                {
                                                    category
                                                }
                                            ),
                                            /* @__PURE__ */ jsxs("div", {
                                                className: "lg:col-span-3", children: [
                                                    /* @__PURE__ */ jsx("div", {
                                                        className: "flex items-center justify-between pb-6",
                                                        children: /* @__PURE__ */ jsx("h1", {
                                                            className: "text-4xl font-bold tracking-tight text-main-600",
                                                            children: (category == null ? void 0 : category.name) ?? "Dịch vụ"
                                                        })
                                                    }),
                                                    /* @__PURE__ */ jsxs("div", {
                                                        className: "page-toc", children: [
                                                            /* @__PURE__ */ jsx("p", {
                                                                className: "font-bold mb-3 text-lg",
                                                                children: t("Nội dung bài viết")
                                                            }),
                                                            /* @__PURE__ */ jsx("div", {dangerouslySetInnerHTML: {__html: toc}})
                                                        ]
                                                    }),
                                                    /* @__PURE__ */ jsx("div", {
                                                        className: "page-content",
                                                        dangerouslySetInnerHTML: {__html: content}
                                                    }),
                                                    /* @__PURE__ */ jsxs("div", {
                                                        className: "my-10", children: [
                                                            /* @__PURE__ */ jsx("p", {
                                                                className: "font-bold mb-3",
                                                                children: t("Chia sẻ:")
                                                            }),
                                                            /* @__PURE__ */ jsxs("div", {
                                                                className: "sm:flex gap-2", children: [
                                                                    /* @__PURE__ */ jsx(FacebookShareButton, {
                                                                        url: shareUrl,
                                                                        children: /* @__PURE__ */ jsx(FacebookIcon, {
                                                                            size: 48,
                                                                            round: true
                                                                        })
                                                                    }),
                                                                    /* @__PURE__ */ jsx(LinkedinShareButton, {
                                                                        url: shareUrl,
                                                                        children: /* @__PURE__ */ jsx(LinkedinIcon, {
                                                                            size: 48,
                                                                            round: true
                                                                        })
                                                                    }),
                                                                    /* @__PURE__ */ jsx(FacebookMessengerShareButton, {
                                                                        url: shareUrl,
                                                                        appId: "",
                                                                        children: /* @__PURE__ */ jsx(FacebookMessengerIcon, {
                                                                            size: 48,
                                                                            round: true
                                                                        })
                                                                    }),
                                                                    /* @__PURE__ */ jsx(TelegramShareButton, {
                                                                        url: shareUrl,
                                                                        children: /* @__PURE__ */ jsx(TelegramIcon, {
                                                                            size: 48,
                                                                            round: true
                                                                        })
                                                                    }),
                                                                    /* @__PURE__ */ jsx(TwitterShareButton, {
                                                                        url: shareUrl,
                                                                        children: /* @__PURE__ */ jsx(TwitterIcon, {
                                                                            size: 48,
                                                                            round: true
                                                                        })
                                                                    }),
                                                                    /* @__PURE__ */ jsx(ViberShareButton, {
                                                                        url: shareUrl,
                                                                        children: /* @__PURE__ */ jsx(ViberIcon, {
                                                                            size: 48,
                                                                            round: true
                                                                        })
                                                                    }),
                                                                    /* @__PURE__ */ jsx(WhatsappShareButton, {
                                                                        url: shareUrl,
                                                                        children: /* @__PURE__ */ jsx(WhatsappIcon, {
                                                                            size: 48,
                                                                            round: true
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
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
