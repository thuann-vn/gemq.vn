import {jsx, jsxs} from "react/jsx-runtime";
import {c as classNames} from "./Helper-fobfuv7J.js";

function CheckoutSteps({step = 2}) {
    return /* @__PURE__ */ jsx("div", {
        className: "relative", children: /* @__PURE__ */ jsxs("ul", {
            className: "relative flex w-full items-center justify-between space-x-2 sm:space-x-4", children: [
                /* @__PURE__ */ jsxs("li", {
                    className: "flex items-center space-x-3 text-left sm:space-x-4", children: [
                        /* @__PURE__ */ jsx(
                            "span",
                            {
                                className: "flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700",
                                children: /* @__PURE__ */ jsx(
                                    "svg",
                                    {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-4 w-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        "stroke-width": "2",
                                        children: /* @__PURE__ */ jsx(
                                            "path",
                                            {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "M5 13l4 4L19 7"
                                            }
                                        )
                                    }
                                )
                            }
                        ),
                        /* @__PURE__ */ jsx("span", {className: "font-semibold text-gray-900", children: "Shop"})
                    ]
                }),
                /* @__PURE__ */ jsx(
                    "svg",
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 text-gray-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        children: /* @__PURE__ */ jsx("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M9 5l7 7-7 7"
                        })
                    }
                ),
                /* @__PURE__ */ jsxs("li", {
                    className: "flex items-center space-x-3 text-left sm:space-x-4", children: [
                        /* @__PURE__ */ jsx("span", {
                            className: classNames(
                                "flex h-6 w-6 items-center justify-center rounded-full",
                                step == 2 ? "bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" : "",
                                step > 2 ? "bg-emerald-200 text-xs font-semibold text-emerald-700" : ""
                            ), children: step == 2 ? 2 : /* @__PURE__ */ jsx(
                                "svg",
                                {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    children: /* @__PURE__ */ jsx(
                                        "path",
                                        {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M5 13l4 4L19 7"
                                        }
                                    )
                                }
                            )
                        }),
                        /* @__PURE__ */ jsx("span", {className: "font-semibold text-gray-900", children: "Place Order"})
                    ]
                }),
                /* @__PURE__ */ jsx(
                    "svg",
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 text-gray-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        children: /* @__PURE__ */ jsx("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M9 5l7 7-7 7"
                        })
                    }
                ),
                /* @__PURE__ */ jsxs("li", {
                    className: "flex items-center space-x-3 text-left sm:space-x-4", children: [
                        /* @__PURE__ */ jsx("span", {
                            className: classNames(
                                "flex h-6 w-6 items-center justify-center rounded-full",
                                step == 3 ? "bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" : ""
                            ), children: "3"
                        }),
                        /* @__PURE__ */ jsx("span", {className: "font-semibold text-gray-500", children: "Summary"})
                    ]
                })
            ]
        })
    });
}

export {
    CheckoutSteps as C
};
