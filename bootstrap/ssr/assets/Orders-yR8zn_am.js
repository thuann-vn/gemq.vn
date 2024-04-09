import {Fragment as Fragment$1, jsx, jsxs} from "react/jsx-runtime";
import {A as AccountNav} from "./AccountNav-Lmh_tk3u.js";
import {c as classNames, f as formatDate} from "./Helper-fobfuv7J.js";
import {Link, router} from "@inertiajs/react";
import {Fragment, useContext} from "react";
import axios from "axios";
import {C as CartContext} from "./CartContext-OwhgCTII.js";
import {Menu, Transition} from "@headlessui/react";
import {ClockIcon, EllipsisVerticalIcon} from "@heroicons/react/24/outline";
import {CheckCircleIcon} from "@heroicons/react/24/solid";
import {C as CustomCurrencyFormat} from "./CurrencyFormat-NUeB0jkB.js";
import {P as Pagination} from "./Pagination-xbXeNdb2.js";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import "moment";
import "moment/dist/locale/vi.js";
import "react-currency-format";
import "react-i18next";

function OrderItem({order, ...props}) {
    const {openCart} = useContext(CartContext);
    const _addToCart = (event, product) => {
        event.preventDefault();
        axios.post(route("cart.add-to-cart", {id: product.id, qty: 1})).then((response) => {
            router.reload({only: ["cart"]});
            openCart();
        });
    };
    const _renderStatusIcon = () => {
        switch (order.status) {
            case "pending":
                return /* @__PURE__ */ jsx(
                    CheckCircleIcon,
                    {
                        className: "w-5 h-5 text-green-500",
                        "aria-hidden": "true"
                    }
                );
            case "processing":
                return /* @__PURE__ */ jsx(
                    CheckCircleIcon,
                    {
                        className: "w-5 h-5 text-green-500",
                        "aria-hidden": "true"
                    }
                );
            case "completed":
                return /* @__PURE__ */ jsx(
                    CheckCircleIcon,
                    {
                        className: "w-5 h-5 text-green-500",
                        "aria-hidden": "true"
                    }
                );
            case "cancelled":
                return /* @__PURE__ */ jsx(
                    CheckCircleIcon,
                    {
                        className: "w-5 h-5 text-green-500",
                        "aria-hidden": "true"
                    }
                );
            default:
                return /* @__PURE__ */ jsx(
                    ClockIcon,
                    {
                        className: "w-5 h-5 text-gray-500",
                        "aria-hidden": "true"
                    }
                );
        }
    };
    const _renderStatus = () => {
        switch (order.status) {
            case "pending":
                return /* @__PURE__ */ jsx("p", {
                    className: "ml-2 text-sm font-medium text-gray-500",
                    children: "Pending"
                });
            case "processing":
                return /* @__PURE__ */ jsx("span", {
                    className: "ml-2 text-sm font-medium text-gray-500",
                    children: "Processing"
                });
            case "completed":
                return /* @__PURE__ */ jsxs("p", {
                    className: "ml-2 text-sm font-medium text-gray-500", children: [
                        "Delivered on ",
                        /* @__PURE__ */ jsx(
                            "time",
                            {
                                dateTime: order.created_at,
                                children: formatDate(order.created_at)
                            }
                        )
                    ]
                });
            case "cancelled":
                return /* @__PURE__ */ jsx("p", {
                    className: "ml-2 text-sm font-medium text-red-500",
                    children: "Cancelled"
                });
            default:
                return /* @__PURE__ */ jsx("p", {
                    className: "ml-2 text-sm font-medium text-gray-500",
                    children: "Pending"
                });
        }
    };
    return /* @__PURE__ */ jsxs(
        "div",
        {
            className: "bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border",
            ...props,
            children: [
                /* @__PURE__ */ jsxs("h3", {
                    className: "sr-only", children: [
                        "Order placed on ",
                        /* @__PURE__ */ jsx(
                            "time",
                            {
                                dateTime: order.created_at,
                                children: order.created_at
                            }
                        )
                    ]
                }),
                /* @__PURE__ */ jsxs(
                    "div",
                    {
                        className: "flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6",
                        children: [
                            /* @__PURE__ */ jsxs("dl", {
                                className: "flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2",
                                children: [
                                    /* @__PURE__ */ jsxs("div", {
                                        children: [
                                            /* @__PURE__ */ jsx("dt", {
                                                className: "font-medium text-gray-900",
                                                children: "Order number"
                                            }),
                                            /* @__PURE__ */ jsx("dd", {
                                                className: "mt-1 text-gray-500",
                                                children: order.number
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsxs("div", {
                                        className: "hidden sm:block", children: [
                                            /* @__PURE__ */ jsx("dt", {
                                                className: "font-medium text-gray-900",
                                                children: "Date placed"
                                            }),
                                            /* @__PURE__ */ jsx("dd", {
                                                className: "mt-1 text-gray-500", children: /* @__PURE__ */ jsx(
                                                    "time",
                                                    {
                                                        dateTime: order.created_at,
                                                        children: formatDate(order.created_at)
                                                    }
                                                )
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ jsxs("div", {
                                        children: [
                                            /* @__PURE__ */ jsx("dt", {
                                                className: "font-medium text-gray-900",
                                                children: "Total amount"
                                            }),
                                            /* @__PURE__ */ jsx("dd", {
                                                className: "mt-1 font-medium text-gray-900",
                                                children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: order.total_price})
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /* @__PURE__ */ jsxs(Menu, {
                                as: "div", className: "relative flex justify-end lg:hidden", children: [
                                    /* @__PURE__ */ jsx("div", {
                                        className: "flex items-center", children: /* @__PURE__ */ jsxs(
                                            Menu.Button,
                                            {
                                                className: "-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500",
                                                children: [
                                                    /* @__PURE__ */ jsxs(
                                                        "span",
                                                        {
                                                            className: "sr-only",
                                                            children: [
                                                                "Options for order ",
                                                                order.number
                                                            ]
                                                        }
                                                    ),
                                                    /* @__PURE__ */ jsx(
                                                        EllipsisVerticalIcon,
                                                        {
                                                            className: "w-6 h-6",
                                                            "aria-hidden": "true"
                                                        }
                                                    )
                                                ]
                                            }
                                        )
                                    }),
                                    /* @__PURE__ */ jsx(
                                        Transition,
                                        {
                                            as: Fragment,
                                            enter: "transition ease-out duration-100",
                                            enterFrom: "transform opacity-0 scale-95",
                                            enterTo: "transform opacity-100 scale-100",
                                            leave: "transition ease-in duration-75",
                                            leaveFrom: "transform opacity-100 scale-100",
                                            leaveTo: "transform opacity-0 scale-95",
                                            children: /* @__PURE__ */ jsx(
                                                Menu.Items,
                                                {
                                                    className: "origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                    children: /* @__PURE__ */ jsx("div", {
                                                        className: "py-1", children: /* @__PURE__ */ jsx(Menu.Item, {
                                                            children: ({active}) => /* @__PURE__ */ jsx(
                                                                Link,
                                                                {
                                                                    href: route("profile.order-detail", {id: order.id}),
                                                                    className: classNames(
                                                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                        "block px-4 py-2 text-sm"
                                                                    ),
                                                                    children: "View"
                                                                }
                                                            )
                                                        })
                                                    })
                                                }
                                            )
                                        }
                                    )
                                ]
                            }),
                            /* @__PURE__ */ jsx(
                                "div",
                                {
                                    className: "hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4",
                                    children: /* @__PURE__ */ jsxs(
                                        Link,
                                        {
                                            href: route("profile.order-detail", {id: order.id}),
                                            className: "flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                            children: [
                                                /* @__PURE__ */ jsx("span", {children: "View Order"}),
                                                /* @__PURE__ */ jsx("span", {
                                                    className: "sr-only",
                                                    children: order.number
                                                })
                                            ]
                                        }
                                    )
                                }
                            )
                        ]
                    }
                ),
                /* @__PURE__ */ jsx("h4", {className: "sr-only", children: "Items"}),
                /* @__PURE__ */ jsx("ul", {
                    role: "list",
                    className: "divide-y divide-gray-200",
                    children: order.items.map((item) => /* @__PURE__ */ jsxs("li", {
                        className: "p-4 sm:p-6", children: [
                            /* @__PURE__ */ jsxs("div", {
                                className: "flex items-center sm:items-start", children: [
                                    /* @__PURE__ */ jsx(
                                        "div",
                                        {
                                            className: "flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40",
                                            children: /* @__PURE__ */ jsx(
                                                "img",
                                                {
                                                    src: item.product.featured_image_url,
                                                    alt: item.product.name,
                                                    className: "w-full h-full object-center object-cover"
                                                }
                                            )
                                        }
                                    ),
                                    /* @__PURE__ */ jsxs("div", {
                                        className: "flex-1 ml-6 text-sm", children: [
                                            /* @__PURE__ */ jsxs(
                                                "div",
                                                {
                                                    className: "font-medium text-gray-900 sm:flex sm:justify-between",
                                                    children: [
                                                        /* @__PURE__ */ jsx("h5", {children: item.product.name}),
                                                        item.shop_variant_name ? /* @__PURE__ */ jsx("p", {
                                                            className: "text-sm text-gray-400",
                                                            children: item.shop_variant_name
                                                        }) : null,
                                                        /* @__PURE__ */ jsxs("p", {
                                                            className: "mt-2 sm:mt-0", children: [
                                                                /* @__PURE__ */ jsxs("span", {
                                                                    className: "text-sm text-gray-400", children: [
                                                                        item.qty,
                                                                        " x"
                                                                    ]
                                                                }),
                                                                " ",
                                                                /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: item.unit_price})
                                                            ]
                                                        })
                                                    ]
                                                }
                                            ),
                                            /* @__PURE__ */ jsx("p", {
                                                className: "hidden text-gray-500 sm:block sm:mt-2",
                                                children: item.product.description
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /* @__PURE__ */ jsxs("div", {
                                className: "mt-6 sm:flex sm:justify-between", children: [
                                    /* @__PURE__ */ jsxs("div", {
                                        className: "flex items-center", children: [
                                            _renderStatusIcon(),
                                            _renderStatus()
                                        ]
                                    }),
                                    /* @__PURE__ */ jsxs(
                                        "div",
                                        {
                                            className: "mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0",
                                            children: [
                                                /* @__PURE__ */ jsx("div", {
                                                    className: "flex-1 flex justify-center",
                                                    children: /* @__PURE__ */ jsx(
                                                        Link,
                                                        {
                                                            href: route("products.detail", {slug: item.product.slug}),
                                                            className: "text-indigo-600 whitespace-nowrap hover:text-indigo-500",
                                                            target: "_blank",
                                                            children: "View product"
                                                        }
                                                    )
                                                }),
                                                /* @__PURE__ */ jsx("div", {
                                                    className: "flex-1 pl-4 flex justify-center",
                                                    children: /* @__PURE__ */ jsx(
                                                        "button",
                                                        {
                                                            type: "button",
                                                            onClick: (e) => _addToCart(e, item.product),
                                                            className: "text-indigo-600 whitespace-nowrap hover:text-indigo-500",
                                                            children: "Buy again"
                                                        }
                                                    )
                                                })
                                            ]
                                        }
                                    )
                                ]
                            })
                        ]
                    }, item.id))
                })
            ]
        },
        order.number
    );
}

function Orders({orders}) {
    return /* @__PURE__ */ jsxs(Fragment$1, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: "Dashboard"}),
            /* @__PURE__ */ jsx("div", {
                className: "py-12", children: /* @__PURE__ */ jsx("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", {
                        className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [
                            /* @__PURE__ */ jsx(AccountNav, {activeTab: "orders"}),
                            /* @__PURE__ */ jsxs("div", {
                                className: "py-6 bg-white", children: [
                                    /* @__PURE__ */ jsx("h1", {
                                        className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
                                        children: "Order history"
                                    }),
                                    /* @__PURE__ */ jsx("p", {
                                        className: "mt-2 text-sm text-gray-500",
                                        children: "Check the status of recent orders, manage returns, and discover similar products."
                                    }),
                                    /* @__PURE__ */ jsxs("div", {
                                        className: "mt-6", children: [
                                            /* @__PURE__ */ jsx("h2", {
                                                className: "sr-only",
                                                children: "Recent orders"
                                            }),
                                            /* @__PURE__ */ jsx("div", {children: orders.data.map((order) => /* @__PURE__ */ jsx(OrderItem, {order}, order.id))}),
                                            /* @__PURE__ */ jsx("div", {
                                                className: "mt-3",
                                                children: /* @__PURE__ */ jsx(Pagination, {data: orders})
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
    Orders as default
};
