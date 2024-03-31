import {jsxs, Fragment, jsx} from "react/jsx-runtime";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import {B as BlogCard} from "./BlogCard-_irUPyNf.js";
import {B as Breadcrumb, S as ShopFilter} from "./Breadcrumb-vlAWALqt.js";
import {useTranslation} from "react-i18next";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    ViberShareButton,
    ViberIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
import "@inertiajs/react";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";

function BlogSingle({post, relatedPosts, content, toc}) {
    const {t} = useTranslation();
    const breadcrumbs = [
        {id: 1, name: "Trang chủ", href: "/"},
        {id: 2, name: t("Tin tức chuyên ngành")}
    ];
    const shareUrl = route("blog.detail", post.slug);
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: post.title}),
            /* @__PURE__ */ jsxs("div", {
                className: "container  mx-auto px-4 sm:px-6 lg:px-8", children: [
                    /* @__PURE__ */ jsx(Breadcrumb, {breadcrumbs}),
                    /* @__PURE__ */ jsxs("div", {
                        className: "grid grid-cols-1 gap-x-8 lg:grid-cols-4 gap-4 mt-12", children: [
                            /* @__PURE__ */ jsx(ShopFilter, {}),
                            /* @__PURE__ */ jsxs("div", {
                                className: "col-span-3", children: [
                                    /* @__PURE__ */ jsxs("article", {
                                        children: [
                                            /* @__PURE__ */ jsx("div", {
                                                className: "flex items-center justify-between pb-6",
                                                children: /* @__PURE__ */ jsx("h1", {
                                                    className: "text-4xl font-bold tracking-tight text-main-600",
                                                    children: (post == null ? void 0 : post.title) ?? "Dịch vụ"
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
                                    }),
                                    relatedPosts.length > 0 ? /* @__PURE__ */ jsxs(Fragment, {
                                        children: [
                                            /* @__PURE__ */ jsxs("div", {
                                                className: "w-fit mx-auto mt-10 flex space-x-2", children: [
                                                    /* @__PURE__ */ jsx("div", {className: "h-0.5 w-2 bg-gray-600"}),
                                                    /* @__PURE__ */ jsx("div", {className: "h-0.5 w-32 bg-gray-600"}),
                                                    /* @__PURE__ */ jsx("div", {className: "h-0.5 w-2 bg-gray-600"})
                                                ]
                                            }),
                                            /* @__PURE__ */ jsxs(
                                                "aside",
                                                {
                                                    "aria-label": "Related Articles",
                                                    className: "mx-auto mt-10 max-w-screen-xl",
                                                    children: [
                                                        /* @__PURE__ */ jsx("h2", {
                                                            className: "mb-8 text-center text-2xl font-bold text-gray-900",
                                                            children: t("Bài viết liên quan")
                                                        }),
                                                        /* @__PURE__ */ jsx(
                                                            "div",
                                                            {
                                                                className: "mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3",
                                                                children: relatedPosts.map((post2, key) => /* @__PURE__ */ jsx(BlogCard, {post: post2}, key))
                                                            }
                                                        )
                                                    ]
                                                }
                                            )
                                        ]
                                    }) : null
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
    BlogSingle as default
};
