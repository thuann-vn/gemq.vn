import {jsxs, Fragment, jsx} from "react/jsx-runtime";
import DeleteUserForm from "./DeleteUserForm-xYX3UAmg.js";
import UpdatePasswordForm from "./UpdatePasswordForm-bIjy5fOB.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-IT8LFuuX.js";
import {A as AccountNav} from "./AccountNav-Lmh_tk3u.js";
import {A as AppHead} from "./AppHead-OyzdhV2f.js";
import "react";
import "./InputError-NzwfGsTp.js";
import "./InputLabel-Febp5y5Y.js";
import "@headlessui/react";
import "./TextInput-4P_gfX6y.js";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";
import "@inertiajs/react";
import "./PrimaryButton-HW0iU44d.js";
import "@heroicons/react/24/solid";

function Edit({auth, mustVerifyEmail, status}) {
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(AppHead, {title: "Profile"}),
            /* @__PURE__ */ jsx("div", {
                className: "py-12", children: /* @__PURE__ */ jsxs("div", {
                    className: "container mx-auto sm:px-6 lg:px-8 space-y-6", children: [
                        /* @__PURE__ */ jsx(AccountNav, {activeTab: "profile"}),
                        /* @__PURE__ */ jsx("div", {
                            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
                                UpdateProfileInformation,
                                {
                                    mustVerifyEmail,
                                    status,
                                    className: "max-w-xl"
                                }
                            )
                        }),
                        /* @__PURE__ */ jsx("div", {
                            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
                            children: /* @__PURE__ */ jsx(UpdatePasswordForm, {className: "max-w-xl"})
                        }),
                        /* @__PURE__ */ jsx("div", {
                            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
                            children: /* @__PURE__ */ jsx(DeleteUserForm, {className: "max-w-xl"})
                        })
                    ]
                })
            })
        ]
    });
}

export {
    Edit as default
};
