import {jsx, jsxs} from "react/jsx-runtime";

function Alert({title, message}) {
    return /* @__PURE__ */ jsxs("div", {
        className: "flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50", role: "alert", children: [
            /* @__PURE__ */ jsx("svg", {
                className: "flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /* @__PURE__ */ jsx("path", {d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})
            }),
            /* @__PURE__ */ jsx("span", {className: "sr-only", children: "Danger"}),
            /* @__PURE__ */ jsxs("div", {
                children: [
                    /* @__PURE__ */ jsx("span", {className: "font-medium", children: title}),
                    typeof message === "string" ? /* @__PURE__ */ jsx("p", {
                        className: "mt-1",
                        children: message
                    }) : /* @__PURE__ */ jsx("ul", {
                        className: "mt-1.5 list-disc list-inside",
                        children: message.map((msg, index) => /* @__PURE__ */ jsx("li", {children: msg}, index))
                    })
                ]
            })
        ]
    });
}
export {
    Alert as A
};
