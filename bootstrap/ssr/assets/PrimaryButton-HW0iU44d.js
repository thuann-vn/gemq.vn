import {jsx, jsxs} from "react/jsx-runtime";

function PrimaryButton({className = "", disabled, loading, children, ...props}) {
    return /* @__PURE__ */ jsxs(
        "button",
        {
            ...props,
            className: `rounded-full inline-flex items-center px-8 py-3 bg-main-900 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-main-950 focus:bg-main-950 active:bg-main-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
            disabled,
            children: [
                loading && /* @__PURE__ */ jsxs("svg", {
                    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /* @__PURE__ */ jsx("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            "stroke-width": "4"
                        }),
                        /* @__PURE__ */ jsx("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })
                    ]
                }),
                children
            ]
        }
    );
}
export {
    PrimaryButton as P
};
