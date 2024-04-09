import {jsx, jsxs} from "react/jsx-runtime";
import {Link} from "@inertiajs/react";
import {useTranslation} from "react-i18next";

function Pagination({data}) {
    let links = data.links;
    const {t} = useTranslation();
    return /* @__PURE__ */ jsx("div", {
        className: "bg-white px-4 py-3 sm:px-6", children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col content-center items-center", children: [
                /* @__PURE__ */ jsx("div", {
                    className: "mt-3 mb-3", children: /* @__PURE__ */ jsxs("p", {
                        className: "text-sm text-gray-500", children: [
                            "Hiển thị ",
                            /* @__PURE__ */ jsx(
                                "span",
                                {
                                    className: "font-medium",
                                    children: (data.current_page - 1) * data.per_page + 1
                                }
                            ),
                            " đến ",
                            /* @__PURE__ */ jsx(
                                "span",
                                {
                                    className: "font-medium",
                                    children: Math.min(data.current_page * data.per_page + data.per_page, data.total)
                                }
                            ),
                            " trong tổng số ",
                            " ",
                            /* @__PURE__ */ jsx("span", {className: "font-medium", children: data.total}),
                            " kết quả"
                        ]
                    })
                }),
                /* @__PURE__ */ jsx("div", {
                    children: /* @__PURE__ */ jsx("nav", {
                        className: "isolate inline-flex -space-x-px rounded-md shadow-sm",
                        "aria-label": "Pagination",
                        children: links.map((link) => {
                            if (link.active) {
                                return /* @__PURE__ */ jsx(
                                    "a",
                                    {
                                        href: "#",
                                        "aria-current": "page",
                                        className: "relative rounded-full z-10 inline-flex items-center bg-main-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                        dangerouslySetInnerHTML: {__html: t(link.label)}
                                    },
                                    link.label
                                );
                            } else {
                                return /* @__PURE__ */ jsx(
                                    Link,
                                    {
                                        href: link.url,
                                        className: "relative rounded-full inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                                        dangerouslySetInnerHTML: {__html: t(link.label)}
                                    },
                                    link.label
                                );
                            }
                        })
                    })
                })
            ]
        })
    });
}
export {
    Pagination as P
};
