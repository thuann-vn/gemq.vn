import {jsxs, jsx, Fragment} from "react/jsx-runtime";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Parallax, Autoplay} from "swiper/modules";
import {c as classNames, i as imageStorageUrl} from "./Helper-fobfuv7J.js";
import {Link, usePage, useForm} from "@inertiajs/react";
import {P as ProductCard} from "./ProductCard-nQ--h5D2.js";
import {I as InputLabel} from "./InputLabel-Febp5y5Y.js";
import {T as TextInput} from "./TextInput-4P_gfX6y.js";
import {I as InputError} from "./InputError-NzwfGsTp.js";
import {forwardRef, useRef, useImperativeHandle, useEffect} from "react";
import {P as PrimaryButton} from "./PrimaryButton-HW0iU44d.js";
import {A as Alert} from "./Alert-5wTZXjfY.js";
import {useTranslation} from "react-i18next";
import "moment";
import "moment/dist/locale/vi.js";
import "./CartContext-OwhgCTII.js";

function Banner({slide}) {
    return /* @__PURE__ */ jsxs("div", {
        className: classNames("w-full relative slide-item", slide.is_alt_style ? "slide-item-alt" : ""), children: [
            /* @__PURE__ */ jsx("img", {src: imageStorageUrl(slide.image), alt: "", className: "w-full"}),
            !slide.is_image_only ? /* @__PURE__ */ jsx(
                "div",
                {
                    className: "absolute top-0 left-0 h-full w-full flex items-center justify-center",
                    "data-swiper-parallax": "-1000",
                    children: /* @__PURE__ */ jsx("div", {
                        className: "container mx-auto px-10", children: /* @__PURE__ */ jsxs("div", {
                            className: "text-center", children: [
                                /* @__PURE__ */ jsx(
                                    "h2",
                                    {
                                        className: "text-6xl font-bold slide-title mb-3",
                                        dangerouslySetInnerHTML: {__html: slide.title}
                                    }
                                ),
                                /* @__PURE__ */ jsx(
                                    "p",
                                    {
                                        className: "text-lg mt-3  mb-3 slide-subtitle",
                                        dangerouslySetInnerHTML: {__html: slide.subtitle}
                                    }
                                ),
                                /* @__PURE__ */ jsx(
                                    Link,
                                    {
                                        href: slide.link,
                                        className: "slide-button shadow rounded-full px-3 bg-white text-black py-2 inline-block mt-3",
                                        children: "Xem thêm"
                                    }
                                )
                            ]
                        })
                    })
                }
            ) : null
        ]
    });
}

function BannerSlider({block}) {
    if (!block.slider)
        return /* @__PURE__ */ jsx(Fragment, {});
    if (block.slider.display_type == "grid") {
        return /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-x-3 mt-5",
            children: block.slider.items.map((slide, index) => {
                return /* @__PURE__ */ jsx(Banner, {slide}, "slider_" + block.sliderId + "_slides_" + index);
            })
        });
    } else {
        return /* @__PURE__ */ jsx(
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
                children: block.slider.items.map((slide, index) => {
                    return /* @__PURE__ */ jsx(SwiperSlide, {children: /* @__PURE__ */ jsx(Banner, {slide})}, index);
                })
            }
        );
    }
}

function Container({children}) {
    return /* @__PURE__ */ jsx("div", {className: "container mx-auto px-2 sm:px-6 lg:px-8", children});
}

function Divider({className = ""}) {
    return /* @__PURE__ */ jsx("img", {
        src: "/images/divider.png",
        alt: "divider",
        className: className + " h-5 mx-auto my-6"
    });
}

function Categories({block}) {
    return /* @__PURE__ */ jsx("div", {
        className: "bg-white py-10", children: /* @__PURE__ */ jsxs(Container, {
            children: [
                /* @__PURE__ */ jsx("h2", {
                    className: "text-center text-2xl font-semibold leading-8 text-gray-900 uppercase",
                    children: block.title
                }),
                /* @__PURE__ */ jsx(Divider, {}),
                /* @__PURE__ */ jsx(
                    "div",
                    {
                        className: "mx-auto mt-10 grid max-w-lg grid-cols-2 md:grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3",
                        children: block.categories.map((category) => /* @__PURE__ */ jsxs(
                            Link,
                            {
                                href: route("shop.category", {slug: category.slug}),
                                className: "flex flex-col justify-center  items-center text-sm font-medium text-gray-900 group",
                                children: [
                                    /* @__PURE__ */ jsx("div", {
                                        className: "flex-shrink-0 rounded-full overflow-hidden",
                                        children: /* @__PURE__ */ jsx(
                                            "img",
                                            {
                                                className: "transition duration-500 h-32 w-60 object-fit ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110",
                                                src: imageStorageUrl(category.image),
                                                alt: category.name
                                            }
                                        )
                                    }),
                                    /* @__PURE__ */ jsx("span", {
                                        className: "mt-4 text-center font-bold",
                                        children: category.name
                                    })
                                ]
                            },
                            category.id
                        ))
                    }
                )
            ]
        })
    });
}

function Grid({block}) {
    return /* @__PURE__ */ jsxs(Container, {
        children: [
            /* @__PURE__ */ jsxs(Fragment, {
                children: [
                    /* @__PURE__ */ jsx("h2", {
                        className: "text-center text-2xl font-semibold leading-8 text-gray-900 uppercase",
                        children: block.title
                    }),
                    /* @__PURE__ */ jsx(Divider, {})
                ]
            }),
            /* @__PURE__ */ jsx("div", {
                className: `grid md:grid-cols-${block.columns.length} gap-x-2`,
                children: block.columns.map((column, index) => /* @__PURE__ */ jsx("div", {children: column.map((item, index2) => /* @__PURE__ */ jsx(PageBlock, {block: item}))}))
            })
        ]
    });
}

function ProductSlider({products, title, className = ""}) {
    const randomId = Math.floor(Math.random() * 1e3);
    return /* @__PURE__ */ jsxs("div", {
        className: "relative product-slider " + className, children: [
            title ? /* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx("h2", {className: "text-2xl font-bold uppercase", children: title}),
                    /* @__PURE__ */ jsx("a", {href: "#", className: "text-sm text-gray-500", children: "See all"})
                ]
            }) : "",
            /* @__PURE__ */ jsx(
                Swiper,
                {
                    modules: [Navigation],
                    navigation: {
                        nextEl: ".swiper-button-next_" + randomId,
                        prevEl: ".swiper-button-prev_" + randomId
                    },
                    slidesPerView: 1,
                    spaceBetween: "15px",
                    effect: "creative",
                    grabCursor: true,
                    className: "pt-5",
                    slideActiveClass: "slide-active",
                    breakpoints: {
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1536: {
                            slidesPerView: 3
                        }
                    },
                    children: products.map((product, index) => {
                        return /* @__PURE__ */ jsx(SwiperSlide, {
                            children: /* @__PURE__ */ jsx(ProductCard, {
                                product, onRemoveFromWishList: () => {
                                }
                            })
                        }, index);
                    })
                }
            ),
            /* @__PURE__ */ jsx("div", {className: `swiper-button-prev swiper-button-prev_${randomId}`}),
            /* @__PURE__ */ jsx("div", {className: `swiper-button-next swiper-button-next_${randomId}`})
        ]
    });
}

function Collection({block}) {
    return /* @__PURE__ */ jsx("div", {
        className: "py-10", children: /* @__PURE__ */ jsxs(Container, {
            children: [
                /* @__PURE__ */ jsx("div", {
                    className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", {
                        className: "text-center self-center", children: [
                            /* @__PURE__ */ jsx("h2", {
                                className: "text-center text-2xl font-semibold leading-8 text-gray-900 uppercase",
                                children: block.collection.name
                            }),
                            /* @__PURE__ */ jsx(Divider, {}),
                            /* @__PURE__ */ jsx("p", {
                                className: "text-sm text-gray-900",
                                children: block.collection.description
                            })
                        ]
                    })
                }),
                /* @__PURE__ */ jsx(ProductSlider, {products: block.collection.home_products})
            ]
        })
    });
}

function CallToAction({data}) {
    return /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(
            "a",
            {
                href: data.url,
                title: data.label,
                className: classNames(data.buttonStyle),
                target: data.openNewWindow ? "_blank" : "_self",
                rel: data.openNewWindow ? "noopener noreferrer" : "",
                children: data.label
            }
        )
    });
}

function Card({card}) {
    return /* @__PURE__ */ jsx(
        "div",
        {
            className: "relative transition-all duration-300 ease-out bg-white group card @if($isFullyClickable()) hover:shadow-md @endif",
            children: /* @__PURE__ */ jsxs("div", {
                className: "p-4 prose sm:p-6 max-w-none", children: [
                    card.imageUrl ? /* @__PURE__ */ jsx("img", {
                        src: card.imageUrl,
                        alt: "",
                        className: "card__image"
                    }) : null,
                    card.title ? /* @__PURE__ */ jsx("h3", {
                        className: "card__title",
                        dangerouslySetInnerHTML: {__html: card.title}
                    }) : null,
                    card.text ? /* @__PURE__ */ jsx(
                        "div",
                        {
                            className: "card__description",
                            dangerouslySetInnerHTML: {__html: card.text}
                        }
                    ) : null,
                    card.callToActions && card.callToActions.length ? /* @__PURE__ */ jsx("div", {
                        className: "flex flex-wrap gap-4 mt-3 justify-center",
                        children: card.callToActions.map((callToAction, index) => /* @__PURE__ */ jsx(CallToAction, {data: callToAction}, index))
                    }) : null
                ]
            })
        }
    );
}

function Cards({block}) {
    return /* @__PURE__ */ jsx("div", {
        className: "relative py-12 {{ $getBackgroundColourClass() }}", children: /* @__PURE__ */ jsxs("div", {
            className: "container px-4 mx-auto", children: [
                block.title ? /* @__PURE__ */ jsx("div", {
                    className: "mb-6 prose max-w-none",
                    children: /* @__PURE__ */ jsx("h2", {children: block.title})
                }) : null,
                /* @__PURE__ */ jsx("div", {
                    className: classNames(
                        "grid sm:grid-cols-2 gap-4",
                        `md:grid-cols-${block.gridColumns ?? 3}`
                    ), children: block.cards.map((card, index) => /* @__PURE__ */ jsx(Card, {card}))
                })
            ]
        })
    });
}

function Text({block}) {
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            block.title ? /* @__PURE__ */ jsxs(Fragment, {
                children: [
                    /* @__PURE__ */ jsx(
                        "h2",
                        {
                            className: "text-center text-2xl font-semibold leading-8 text-gray-900 uppercase",
                            dangerouslySetInnerHTML: {__html: block.title}
                        }
                    ),
                    /* @__PURE__ */ jsx(Divider, {})
                ]
            }) : null,
            block.content ? /* @__PURE__ */ jsx("div", {
                className: "leading-8",
                dangerouslySetInnerHTML: {__html: block.content}
            }) : null
        ]
    });
}

const TextArea = forwardRef(function TextArea2({
                                                   className = "",
                                                   containerClassName = "",
                                                   isFocused = false,
                                                   left = null,
                                                   ...props
                                               }, ref) {
    const localRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => {
            var _a;
            return (_a = localRef.current) == null ? void 0 : _a.focus();
        }
    }));
    useEffect(() => {
        var _a;
        if (isFocused) {
            (_a = localRef.current) == null ? void 0 : _a.focus();
        }
    }, []);
    return /* @__PURE__ */ jsx("div", {
        className: classNames("relative", containerClassName), children: /* @__PURE__ */ jsx(
            "textarea",
            {
                ...props,
                className: classNames(
                    "w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                    left ? "pl-11" : "",
                    className
                ),
                ref: localRef,
                children: props.children
            }
        )
    });
});

function ContactForm({block}) {
    const {flash} = usePage().props;
    const {data, setData, post, processing, errors, reset} = useForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const {t} = useTranslation();
    const submit = (e) => {
        e.preventDefault();
        post(
            route("contact.submit"),
            {
                preserveScroll: true,
                onSuccess: () => reset()
            }
        );
    };
    return /* @__PURE__ */ jsxs("div", {
        className: "py-6 bg-white px-10 shadow", children: [
            /* @__PURE__ */ jsx("h2", {
                className: "mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900",
                children: block.title
            }),
            /* @__PURE__ */ jsx("div", {className: "mb-8", dangerouslySetInnerHTML: {__html: block.content}}),
            flash.success && /* @__PURE__ */ jsx(
                Alert,
                {
                    title: "Success",
                    message: t("Lời nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.")
                }
            ),
            /* @__PURE__ */ jsxs("form", {
                onSubmit: submit, className: "space-y-4", autoComplete: "false", children: [
                    /* @__PURE__ */ jsxs("div", {
                        children: [
                            /* @__PURE__ */ jsx(InputLabel, {htmlFor: "email", value: t("Họ và Tên")}),
                            /* @__PURE__ */ jsx(
                                TextInput,
                                {
                                    id: "name",
                                    type: "text",
                                    name: "name",
                                    value: data.name,
                                    className: "mt-1 block w-full",
                                    onChange: (e) => setData("name", e.target.value)
                                }
                            ),
                            /* @__PURE__ */ jsx(InputError, {message: errors.name, className: "mt-2"})
                        ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                        children: [
                            /* @__PURE__ */ jsx(InputLabel, {htmlFor: "email", value: "Email"}),
                            /* @__PURE__ */ jsx(
                                TextInput,
                                {
                                    id: "email",
                                    type: "email",
                                    name: "email",
                                    value: data.email,
                                    className: "mt-1 block w-full",
                                    onChange: (e) => setData("email", e.target.value)
                                }
                            ),
                            /* @__PURE__ */ jsx(InputError, {message: errors.email, className: "mt-2"})
                        ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                        children: [
                            /* @__PURE__ */ jsx(InputLabel, {htmlFor: "phone", value: t("Số điện thoại")}),
                            /* @__PURE__ */ jsx(
                                TextInput,
                                {
                                    id: "phone",
                                    type: "tel",
                                    name: "phone",
                                    value: data.phone,
                                    className: "mt-1 block w-full",
                                    onChange: (e) => setData("phone", e.target.value)
                                }
                            ),
                            /* @__PURE__ */ jsx(InputError, {message: errors.phone, className: "mt-2"})
                        ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                        children: [
                            /* @__PURE__ */ jsx(InputLabel, {htmlFor: "subject", value: t("Chủ đề")}),
                            /* @__PURE__ */ jsx(
                                TextInput,
                                {
                                    id: "subject",
                                    type: "text",
                                    name: "subject",
                                    value: data.subject,
                                    className: "mt-1 block w-full",
                                    onChange: (e) => setData("subject", e.target.value)
                                }
                            ),
                            /* @__PURE__ */ jsx(InputError, {message: errors.subject, className: "mt-2"})
                        ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                        children: [
                            /* @__PURE__ */ jsx(InputLabel, {htmlFor: "message", value: t("Nội dung")}),
                            /* @__PURE__ */ jsx(
                                TextArea,
                                {
                                    id: "message",
                                    name: "message",
                                    value: data.message,
                                    className: "mt-1 block w-full",
                                    onChange: (e) => setData("message", e.target.value)
                                }
                            ),
                            /* @__PURE__ */ jsx(InputError, {message: errors.message, className: "mt-2"})
                        ]
                    }),
                    /* @__PURE__ */ jsx(PrimaryButton, {disabled: processing, children: t("Gửi lời nhắn")})
                ]
            })
        ]
    });
}

function BrandSlider({block}) {
    return /* @__PURE__ */ jsxs(Container, {
        children: [
            block.title ? /* @__PURE__ */ jsxs(Fragment, {
                children: [
                    /* @__PURE__ */ jsx("h2", {
                        className: "text-center text-2xl font-semibold leading-8 text-gray-900 uppercase",
                        children: block.title
                    }),
                    /* @__PURE__ */ jsx(Divider, {})
                ]
            }) : null,
            /* @__PURE__ */ jsx(
                "div",
                {
                    className: "mx-auto mt-10 mb-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3",
                    children: block.brands.map((brand) => /* @__PURE__ */ jsx(
                        "img",
                        {
                            className: "transition duration-500 md:h-32 object-contain ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110",
                            src: imageStorageUrl(brand.image),
                            alt: brand.name
                        }
                    ))
                }
            )
        ]
    });
}

function TestimonialItem({item}) {
    return /* @__PURE__ */ jsx(
        "section",
        {
            className: "relative isolate overflow-hidden bg-main-50 rounded-lg p-3 py-6 hover:shadow-md transition-all",
            children: /* @__PURE__ */ jsx(Container, {
                children: /* @__PURE__ */ jsxs("figure", {
                    children: [
                        /* @__PURE__ */ jsx("blockquote", {
                            className: "text-center font-semibold leading-8 text-gray-900",
                            children: /* @__PURE__ */ jsxs("p", {
                                children: [
                                    "“",
                                    item.content,
                                    "”"
                                ]
                            })
                        }),
                        /* @__PURE__ */ jsxs("figcaption", {
                            className: "mt-10", children: [
                                /* @__PURE__ */ jsx(
                                    "img",
                                    {
                                        className: "mx-auto h-16 w-16 rounded-full",
                                        src: imageStorageUrl(item.image),
                                        alt: item.name
                                    }
                                ),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "mt-4 space-x-3 text-center", children: [
                                        /* @__PURE__ */ jsx("div", {
                                            className: "font-semibold text-gray-900",
                                            children: item.name
                                        }),
                                        /* @__PURE__ */ jsx("svg", {
                                            viewBox: "0 0 2 2",
                                            width: 3,
                                            height: 3,
                                            "aria-hidden": "true",
                                            className: "fill-gray-900",
                                            children: /* @__PURE__ */ jsx("circle", {cx: 1, cy: 1, r: 1})
                                        }),
                                        /* @__PURE__ */ jsx("div", {
                                            className: "text-gray-600",
                                            children: item.position
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        }
    );
}

function Testimonials({block}) {
    return /* @__PURE__ */ jsxs(Container, {
        children: [
            block.title ? /* @__PURE__ */ jsxs(Fragment, {
                children: [
                    /* @__PURE__ */ jsx("h2", {
                        className: "text-center text-2xl font-semibold leading-8 text-gray-900 uppercase",
                        children: block.title
                    }),
                    /* @__PURE__ */ jsx(Divider, {})
                ]
            }) : null,
            /* @__PURE__ */ jsx(
                "div",
                {
                    className: "mx-auto mt-10 grid max-w-lg sm:grid-cols-2 md:grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none",
                    children: block.items.map((item) => /* @__PURE__ */ jsx("div", {children: /* @__PURE__ */ jsx(TestimonialItem, {item})}, item.id))
                }
            )
        ]
    });
}

function PageBlock({block}) {
    const renderBlock = (block2) => {
        switch (block2.name) {
            case "Text":
                return /* @__PURE__ */ jsx(Text, {block: block2});
            case "Slider":
                return /* @__PURE__ */ jsx(BannerSlider, {block: block2});
            case "Categories":
                return /* @__PURE__ */ jsx(Categories, {block: block2});
            case "Grid":
                return /* @__PURE__ */ jsx(Grid, {block: block2});
            case "Product Collection":
                return /* @__PURE__ */ jsx(Collection, {block: block2});
            case "Cards":
                return /* @__PURE__ */ jsx(Cards, {block: block2});
            case "Contact Form":
                return /* @__PURE__ */ jsx(ContactForm, {block: block2});
            case "Brand Logo Slider":
                return /* @__PURE__ */ jsx(BrandSlider, {block: block2});
            case "Testimonials":
                return /* @__PURE__ */ jsx(Testimonials, {block: block2});
        }
    };
    return /* @__PURE__ */ jsx("div", {
        className: classNames(
            block.containerWidth === "container" ? "container mx-auto px-4 sm:px-6 lg:px-8" : "",
            block.customClasses
        ), children: renderBlock(block)
    });
}

function PageSingle({pageTitle, content, blocks}) {
    console.log(blocks);
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: pageTitle}),
            /* @__PURE__ */ jsx("div", {children: blocks.map((block, index) => /* @__PURE__ */ jsx(PageBlock, {block}, index))})
        ]
    });
}

export {
    PageSingle as default
};
