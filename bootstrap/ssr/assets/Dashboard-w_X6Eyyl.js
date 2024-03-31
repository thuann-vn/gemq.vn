import {jsxs, Fragment, jsx} from "react/jsx-runtime";
import {A as AccountNav} from "./AccountNav-Lmh_tk3u.js";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";
import "@inertiajs/react";
import "@heroicons/react/24/solid";

function Dashboard({}) {
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: "Dashboard"}),
            /* @__PURE__ */ jsx("div", {
                className: "py-12", children: /* @__PURE__ */ jsx("div", {
                    className: "container mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", {
                        className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [
                            /* @__PURE__ */ jsx(AccountNav, {activeTab: "dashboard"}),
                            /* @__PURE__ */ jsx("div", {
                                className: "p-6 bg-white border-b border-gray-200",
                                children: "You're logged in!"
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
