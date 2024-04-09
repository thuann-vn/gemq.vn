import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {A as AccountNav} from "./AccountNav-Lmh_tk3u.js";
import {useEffect, useState} from "react";
import {P as ProductCard} from "./ProductCard-nQ--h5D2.js";
import {P as Pagination} from "./Pagination-xbXeNdb2.js";
import {Link} from "@inertiajs/react";
import {ArrowRightIcon, HeartIcon} from "@heroicons/react/24/solid";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";
import "./CartContext-OwhgCTII.js";
import "react-i18next";

function EmptyState({title, description, children}) {
    return /* @__PURE__ */ jsxs("div", {
        className: "text-center", children: [
            children,
            /* @__PURE__ */ jsx("h3", {className: "mt-2 text-sm font-medium text-gray-900", children: title}),
            /* @__PURE__ */ jsx("p", {className: "mt-1 text-sm text-gray-500", children: description}),
            /* @__PURE__ */ jsx("div", {
                className: "mt-6", children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                        href: route("home"),
                        className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                        children: [
                            "Shop now ",
                            /* @__PURE__ */ jsx(ArrowRightIcon, {className: "w-4 h-4 ms-2"})
                        ]
                    }
                )
            })
        ]
    });
}

function Dashboard({myWishList}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(myWishList.data);
    }, []);
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: "Your Wishlist"}),
            /* @__PURE__ */ jsx("div", {
                className: "py-12", children: /* @__PURE__ */ jsx("div", {
                    className: "container mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", {
                        className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [
                            /* @__PURE__ */ jsx(AccountNav, {activeTab: "wishlist"}),
                            items.length == 0 ? /* @__PURE__ */ jsx(
                                EmptyState,
                                {
                                    title: "Your wish list is empty",
                                    description: "You have no items in your wish list.",
                                    children: /* @__PURE__ */ jsx(HeartIcon, {className: "w-12 h-12 text-main-600 mx-auto mt-12"})
                                }
                            ) : /* @__PURE__ */ jsxs("div", {
                                className: "mt-6", children: [
                                    /* @__PURE__ */ jsx("h1", {
                                        className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
                                        children: "Your Wishlist"
                                    }),
                                    /* @__PURE__ */ jsx(
                                        "div",
                                        {
                                            className: "mt-3\n                                                        grid\n                                                        grid-cols-1\n                                                        sm:grid-cols-2\n                                                        lg:grid-cols-4\n                                                        xl:grid-cols-5\n                                                        xl:gap-x-8\n                                                        border\n                                                        border-gray-150\n                                                        border-b-0\n                                                        rounded-lg\n                                                        bg-white\n                                                        overflow-hidden\n                                                        [&>*:nth-child(3)]:border-r-transparent",
                                            children: items.map((item) => /* @__PURE__ */ jsx(
                                                ProductCard,
                                                {
                                                    product: item.product,
                                                    onRemoveFromWishList: () => {
                                                        setItems(items.filter((i) => i.product.id != item.product.id));
                                                    },
                                                    className: "border-b-gray-200"
                                                },
                                                item.product.id
                                            ))
                                        }
                                    ),
                                    /* @__PURE__ */ jsx(Pagination, {data: myWishList})
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
    Dashboard as default
};
