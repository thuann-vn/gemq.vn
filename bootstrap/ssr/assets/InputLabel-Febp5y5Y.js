import {jsx} from "react/jsx-runtime";

function InputLabel({value, className = "", children, ...props}) {
    return /* @__PURE__ */ jsx("label", {
        ...props,
        className: `mt-4 mb-2 block text-sm font-medium ` + className,
        children: value ? value : children
    });
}
export {
    InputLabel as I
};
