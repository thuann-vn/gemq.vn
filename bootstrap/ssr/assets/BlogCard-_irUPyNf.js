import {jsx, jsxs} from "react/jsx-runtime";
import {f as formatDate, i as imageStorageUrl} from "./Helper-fobfuv7J.js";
import {Link} from "@inertiajs/react";

function BlogCard({post}) {
    return /* @__PURE__ */ jsxs("div", {
        className: "overflow-hidden bg-white group", children: [
            /* @__PURE__ */ jsx(
                Link,
                {
                    href: route("blog.detail", {slug: post.slug}),
                    className: "block relative overflow-hidden w-full h-52",
                    children: /* @__PURE__ */ jsx(
                        "img",
                        {
                            src: imageStorageUrl(post.image),
                            className: "w-full h-52 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out",
                            alt: post.title
                        }
                    )
                }
            ),
            /* @__PURE__ */ jsxs("div", {
                className: "py-4", children: [
                    /* @__PURE__ */ jsx("h3", {
                        className: "font-bold text-gray-900 group-hover:text-yellow-600 transition-all duration-500 ease-in-out",
                        children: /* @__PURE__ */ jsx(Link, {
                            href: route("blog.detail", {slug: post.slug}),
                            children: post.title
                        })
                    }),
                    /* @__PURE__ */ jsx("p", {
                        className: "mt-2 text-sm text-primary-500",
                        children: /* @__PURE__ */ jsx("time", {children: formatDate(post.created_at)})
                    }),
                    /* @__PURE__ */ jsx("p", {
                        dangerouslySetInnerHTML: {__html: post.excerpt + "..."},
                        className: "text-gray-500 text-sm mt-3"
                    })
                ]
            })
        ]
    }, post.id);
}
export {
    BlogCard as B
};
