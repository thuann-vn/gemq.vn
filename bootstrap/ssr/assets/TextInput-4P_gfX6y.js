import {jsx, jsxs} from "react/jsx-runtime";
import {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import {c as classNames} from "./Helper-fobfuv7J.js";

const TextInput = forwardRef(function TextInput2({
                                                     type = "text",
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
    return /* @__PURE__ */ jsxs("div", {
        className: classNames("relative", containerClassName), children: [
            /* @__PURE__ */ jsx(
                "input",
                {
                    ...props,
                    type,
                    className: classNames(
                        "w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                        left ? "pl-11" : "",
                        className
                    ),
                    ref: localRef
                }
            ),
            left && /* @__PURE__ */ jsx("div", {
                className: "pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3",
                children: left()
            })
        ]
    });
});
export {
    TextInput as T
};
