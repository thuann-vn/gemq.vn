import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {Head, Link} from "@inertiajs/react";
import {C as CheckoutSteps} from "./CheckoutSteps-GerrVTFw.js";
import {C as CustomCurrencyFormat} from "./CurrencyFormat-NUeB0jkB.js";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";
import "react-currency-format";

function OrderSummary({order}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(Head, {title: "Checkout"}),
            /* @__PURE__ */ jsxs("div", {
                className: "pb-10 container mx-auto  px-4 sm:px-6 lg:px-8", children: [
                    /* @__PURE__ */ jsxs("div", {
                        className: "flex flex-col items-center border-b bg-white py-4 sm:flex-row", children: [
                            /* @__PURE__ */ jsx("a", {
                                href: "#",
                                className: "text-2xl font-bold text-gray-800",
                                children: "Checkout"
                            }),
                            /* @__PURE__ */ jsx("div", {
                                className: "mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base",
                                children: /* @__PURE__ */ jsx(CheckoutSteps, {step: 3})
                            })
                        ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                        className: "mt-6", children: [
                            /* @__PURE__ */ jsx("h1", {
                                className: "text-sm font-semibold uppercase tracking-wide text-main-600",
                                children: "Thank you!"
                            }),
                            /* @__PURE__ */ jsx("p", {
                                className: "mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl",
                                children: "Your order is placed!"
                            }),
                            /* @__PURE__ */ jsxs("p", {
                                className: "mt-2 text-base text-gray-500", children: [
                                    "Your order #",
                                    order.number,
                                    " has been placed and will be processed as soon as possible."
                                ]
                            }),
                            /* @__PURE__ */ jsxs("dl", {
                                className: "mt-12 text-sm font-medium", children: [
                                    /* @__PURE__ */ jsx("dt", {
                                        className: "text-gray-900",
                                        children: "Tracking number"
                                    }),
                                    /* @__PURE__ */ jsx("dd", {className: "text-main-600 mt-2", children: order.number})
                                ]
                            })
                        ]
                    }),
                    /* @__PURE__ */ jsxs("section", {
                        "aria-labelledby": "order-heading", className: "mt-10 border-t border-gray-200", children: [
                            /* @__PURE__ */ jsx("h2", {
                                id: "order-heading",
                                className: "sr-only",
                                children: "Your order"
                            }),
                            /* @__PURE__ */ jsx("h3", {className: "sr-only", children: "Items"}),
                            order.items.map((item) => /* @__PURE__ */ jsxs("div", {
                                className: "py-10 border-b border-gray-200 flex space-x-6", children: [
                                    /* @__PURE__ */ jsx(
                                        "img",
                                        {
                                            src: item.product.featured_image_url,
                                            alt: item.product.name,
                                            className: "flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                                        }
                                    ),
                                    /* @__PURE__ */ jsxs("div", {
                                        className: "flex-auto flex flex-col", children: [
                                            /* @__PURE__ */ jsxs("div", {
                                                children: [
                                                    /* @__PURE__ */ jsx("h4", {
                                                        className: "font-medium text-gray-900",
                                                        children: /* @__PURE__ */ jsx(Link, {
                                                            target: "_blank",
                                                            href: route("products.detail", {slug: item.product.slug}),
                                                            children: item.product.name
                                                        })
                                                    }),
                                                    item.shop_variant_name ? /* @__PURE__ */ jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: item.shop_variant_name
                                                    }) : null,
                                                    /* @__PURE__ */ jsx("p", {
                                                        className: "mt-2 text-sm text-gray-600",
                                                        children: item.product.description
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */ jsx("div", {
                                                className: "mt-6 flex-1 flex items-end",
                                                children: /* @__PURE__ */ jsxs("dl", {
                                                    className: "flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6",
                                                    children: [
                                                        /* @__PURE__ */ jsxs("div", {
                                                            className: "flex", children: [
                                                                /* @__PURE__ */ jsx("dt", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: "Quantity"
                                                                }),
                                                                /* @__PURE__ */ jsx("dd", {
                                                                    className: "ml-2 text-gray-700",
                                                                    children: item.qty
                                                                })
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ jsxs("div", {
                                                            className: "pl-4 flex sm:pl-6", children: [
                                                                /* @__PURE__ */ jsx("dt", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: "Price"
                                                                }),
                                                                /* @__PURE__ */ jsx("dd", {
                                                                    className: "ml-2 text-gray-700",
                                                                    children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: item.unit_price})
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, item.id)),
                            /* @__PURE__ */ jsxs("div", {
                                className: "sm:ml-40 sm:pl-6", children: [
                                    /* @__PURE__ */ jsx("h3", {className: "sr-only", children: "Your information"}),
                                    /* @__PURE__ */ jsx("h4", {className: "sr-only", children: "Addresses"}),
                                    /* @__PURE__ */ jsx("dl", {
                                        className: "grid grid-cols-2 gap-x-6 text-sm py-10",
                                        children: /* @__PURE__ */ jsxs("div", {
                                            children: [
                                                /* @__PURE__ */ jsx("dt", {
                                                    className: "font-medium text-gray-900",
                                                    children: "Shipping address"
                                                }),
                                                /* @__PURE__ */ jsx("dd", {
                                                    className: "mt-2 text-gray-700",
                                                    children: /* @__PURE__ */ jsxs("address", {
                                                        className: "not-italic", children: [
                                                            /* @__PURE__ */ jsx("span", {
                                                                className: "block",
                                                                children: (_a = order.address[0]) == null ? void 0 : _a.name
                                                            }),
                                                            /* @__PURE__ */ jsx("span", {
                                                                className: "block",
                                                                children: (_b = order.address[0]) == null ? void 0 : _b.street
                                                            }),
                                                            /* @__PURE__ */ jsx("span", {
                                                                className: "block",
                                                                children: [(_c = order.address[0]) == null ? void 0 : _c.ward, (_d = order.address[0]) == null ? void 0 : _d.district, (_e = order.address[0]) == null ? void 0 : _e.province].join(", ")
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /* @__PURE__ */ jsx("h4", {className: "sr-only", children: "Payment"}),
                                    /* @__PURE__ */ jsxs("dl", {
                                        className: "grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10",
                                        children: [
                                            /* @__PURE__ */ jsxs("div", {
                                                children: [
                                                    /* @__PURE__ */ jsx("dt", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Payment method"
                                                    }),
                                                    /* @__PURE__ */ jsxs("dd", {
                                                        className: "mt-2 text-gray-700", children: [
                                                            /* @__PURE__ */ jsx("p", {children: (_f = order.payment_method_detail) == null ? void 0 : _f.name}),
                                                            /* @__PURE__ */ jsx("p", {children: (_g = order.payment_method_detail) == null ? void 0 : _g.description})
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */ jsxs("div", {
                                                children: [
                                                    /* @__PURE__ */ jsx("dt", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Shipping method"
                                                    }),
                                                    /* @__PURE__ */ jsxs("dd", {
                                                        className: "mt-2 text-gray-700", children: [
                                                            /* @__PURE__ */ jsx("p", {children: (_h = order.shipping_method_detail) == null ? void 0 : _h.name}),
                                                            /* @__PURE__ */ jsx("p", {children: (_i = order.shipping_method_detail) == null ? void 0 : _i.description})
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsx("h3", {className: "sr-only", children: "Summary"}),
                                    /* @__PURE__ */ jsxs("dl", {
                                        className: "space-y-6 border-t border-gray-200 text-sm pt-10", children: [
                                            /* @__PURE__ */ jsxs("div", {
                                                className: "flex justify-between", children: [
                                                    /* @__PURE__ */ jsx("dt", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Subtotal"
                                                    }),
                                                    /* @__PURE__ */ jsx("dd", {
                                                        className: "text-gray-700",
                                                        children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: order.total_price})
                                                    })
                                                ]
                                            }),
                                            order.discount > 0 && /* @__PURE__ */ jsxs("div", {
                                                className: "flex justify-between", children: [
                                                    /* @__PURE__ */ jsxs("dt", {
                                                        className: "flex font-medium text-gray-900", children: [
                                                            "Discount",
                                                            /* @__PURE__ */ jsx("span", {
                                                                className: "rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2",
                                                                children: "STUDENT50"
                                                            })
                                                        ]
                                                    }),
                                                    /* @__PURE__ */ jsx("dd", {
                                                        className: "text-gray-700",
                                                        children: "-$18.00 (50%)"
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */ jsxs("div", {
                                                className: "flex justify-between", children: [
                                                    /* @__PURE__ */ jsx("dt", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Shipping"
                                                    }),
                                                    /* @__PURE__ */ jsx("dd", {
                                                        className: "text-gray-700",
                                                        children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: order.shipping_price})
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */ jsxs("div", {
                                                className: "flex justify-between", children: [
                                                    /* @__PURE__ */ jsx("dt", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Tax"
                                                    }),
                                                    /* @__PURE__ */ jsx("dd", {
                                                        className: "text-gray-700",
                                                        children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: order.tax})
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */ jsxs("div", {
                                                className: "flex justify-between", children: [
                                                    /* @__PURE__ */ jsx("dt", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Total"
                                                    }),
                                                    /* @__PURE__ */ jsx("dd", {
                                                        className: "text-gray-900",
                                                        children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: parseFloat(String(order.tax)) + parseFloat(String(order.shipping_price)) + parseFloat(String(order.total_price))})
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
    });
}
export {
    OrderSummary as default
};
