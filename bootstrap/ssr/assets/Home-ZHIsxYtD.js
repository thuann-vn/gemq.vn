import {jsx, Fragment, jsxs} from "react/jsx-runtime";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Parallax, Autoplay} from "swiper/modules";
import {c as classNames, i as imageStorageUrl} from "./Helper-fobfuv7J.js";
import {Link} from "@inertiajs/react";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import "moment";
import "moment/dist/locale/vi.js";

function HomeBanner({slides}) {
    if (!slides.length)
        return /* @__PURE__ */ jsx(Fragment, {});
    return /* @__PURE__ */ jsx("section", {
        className: "bg-white", children: /* @__PURE__ */ jsx(
            Swiper,
            {
                modules: [Navigation, Pagination, Parallax, Autoplay],
                navigation: true,
                loop: true,
                spaceBetween: 0,
                slidesPerView: 1,
                effect: "creative",
                pagination: {
                    clickable: true,
                    dynamicBullets: true
                },
                centeredSlides: true,
                grabCursor: true,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: false
                },
                parallax: true,
                speed: 600,
                className: "home-slider",
                children: slides.map((slide, index) => {
                    return /* @__PURE__ */ jsx(SwiperSlide, {
                        children: /* @__PURE__ */ jsxs("div", {
                            className: classNames("w-full relative slide-item", slide.is_alt_style ? "slide-item-alt" : ""),
                            children: [
                                /* @__PURE__ */ jsx("img", {
                                    src: imageStorageUrl(slide.image),
                                    alt: "",
                                    className: "w-full"
                                }),
                                /* @__PURE__ */ jsx("div", {
                                    className: "absolute top-0 left-0 h-full w-full flex items-center justify-center",
                                    "data-swiper-parallax": "-1000",
                                    children: /* @__PURE__ */ jsx("div", {
                                        className: "container mx-auto px-10", children: /* @__PURE__ */ jsxs("div", {
                                            className: "text-center", children: [
                                                /* @__PURE__ */ jsx("h2", {
                                                    className: "text-6xl font-bold slide-title mb-3",
                                                    dangerouslySetInnerHTML: {__html: slide.title}
                                                }),
                                                /* @__PURE__ */ jsx("p", {
                                                    className: "text-lg mt-3  mb-3 slide-subtitle",
                                                    dangerouslySetInnerHTML: {__html: slide.subtitle}
                                                }),
                                                /* @__PURE__ */ jsx(Link, {
                                                    href: slide.link,
                                                    className: "slide-button shadow rounded-full px-3 bg-white text-black py-2 inline-block",
                                                    children: "Shop now"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }, index);
                })
            }
        )
    });
}

function HomeSaleBanner({slides}) {
    if (!slides.length)
        return /* @__PURE__ */ jsx(Fragment, {});
    return /* @__PURE__ */ jsx("section", {
        className: "bg-white", children: /* @__PURE__ */ jsx(
            Swiper,
            {
                modules: [Autoplay],
                loop: true,
                spaceBetween: 0,
                slidesPerView: 1,
                effect: "creative",
                pagination: {
                    clickable: true,
                    dynamicBullets: true
                },
                centeredSlides: true,
                grabCursor: true,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: false
                },
                parallax: true,
                speed: 600,
                className: "home-slider",
                children: slides.map((slide, index) => {
                    return /* @__PURE__ */ jsx(SwiperSlide, {
                        children: /* @__PURE__ */ jsx("div", {
                            className: "w-full relative",
                            children: /* @__PURE__ */ jsx("img", {
                                src: imageStorageUrl(slide.image),
                                alt: "",
                                className: "w-full rounded-lg"
                            })
                        })
                    }, index);
                })
            }
        )
    });
}

function Home({homeSlider, homeSaleSlider1, homeSaleSlider2, collections, homePosts, featuredCategories}) {
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: "Welcome"}),
            /* @__PURE__ */ jsx(HomeBanner, {slides: homeSlider == null ? void 0 : homeSlider.items}),
            /* @__PURE__ */ jsx("div", {
                className: "container mx-auto", children: /* @__PURE__ */ jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-x-3 mt-5", children: [
                        /* @__PURE__ */ jsx(HomeSaleBanner, {slides: (homeSaleSlider1 == null ? void 0 : homeSaleSlider1.items) ?? []}),
                        /* @__PURE__ */ jsx(HomeSaleBanner, {slides: (homeSaleSlider2 == null ? void 0 : homeSaleSlider2.items) ?? []})
                    ]
                })
            })
        ]
    });
}

export {
    Home as default
};
