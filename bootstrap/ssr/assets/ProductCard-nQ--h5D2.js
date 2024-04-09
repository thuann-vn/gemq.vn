import {jsx, jsxs} from "react/jsx-runtime";
import {useContext} from "react";
import {Link, usePage} from "@inertiajs/react";
import {C as CartContext} from "./CartContext-OwhgCTII.js";
import {c as classNames} from "./Helper-fobfuv7J.js";

function ProductCard({
                         product,
                         className = "",
                         onRemoveFromWishList,
                         showCartButton = false,
                         contentContainerClass
                     }) {
    useContext(CartContext);
    usePage().props;
    const renderProductBadge = () => {
        if (product.featured) {
            return /* @__PURE__ */ jsx("div", {
                className: "text-green-800 text-sm font-bold bg-green-200 absolute top-2 left-2 rounded-lg px-2 py-1",
                children: "Featured"
            });
        }
        return null;
    };
    return /* @__PURE__ */ jsx("div", {
        className: classNames("product-card bg-white group", className), children: /* @__PURE__ */ jsxs("div", {
            className: "relative d-flex flex-column justify-content-center align-items-center", children: [
                /* @__PURE__ */ jsx("div", {
                    className: "relative overflow-hidden", children: /* @__PURE__ */ jsx(Link, {
                        href: route("shop.detail", {slug: product.slug}),
                        className: "block",
                        children: /* @__PURE__ */ jsx(
                            "img",
                            {
                                src: product.featured_image_url,
                                alt: product.name,
                                className: "w-full group-hover:scale-110 transition-all duration-300"
                            }
                        )
                    })
                }),
                /* @__PURE__ */ jsxs(
                    Link,
                    {
                        href: route("shop.detail", {slug: product.slug}),
                        className: classNames("block p-[20px] pt-0", contentContainerClass ?? ""),
                        children: [
                            renderProductBadge(),
                            /* @__PURE__ */ jsx("h3", {
                                className: "mt-4 text-main-600 font-bold line-clamp-2 min-h-[48px]",
                                children: product.name
                            }),
                            /* @__PURE__ */ jsx("p", {children: product.description})
                        ]
                    }
                )
            ]
        })
    });
}
export {
    ProductCard as P
};
