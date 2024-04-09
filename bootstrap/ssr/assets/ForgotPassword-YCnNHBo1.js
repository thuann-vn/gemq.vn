import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {I as InputError} from "./InputError-NzwfGsTp.js";
import {P as PrimaryButton} from "./PrimaryButton-HW0iU44d.js";
import {T as TextInput} from "./TextInput-4P_gfX6y.js";
import {Head, useForm} from "@inertiajs/react";
import "react";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";

function ForgotPassword({status}) {
    const {data, setData, post, processing, errors} = useForm({
        email: ""
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(Head, {title: "Forgot Password"}),
            /* @__PURE__ */ jsx("div", {
                className: "flex min-h-[500px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8",
                children: /* @__PURE__ */ jsxs("div", {
                    className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
                    children: [
                        /* @__PURE__ */ jsx("h2", {
                            className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
                            children: "Forgot your password?"
                        }),
                        /* @__PURE__ */ jsx("div", {
                            className: "mb-4 mt-2  text-sm text-gray-600",
                            children: "No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
                        }),
                        status && /* @__PURE__ */ jsx("div", {
                            className: "mb-4 font-medium text-sm text-green-600",
                            children: status
                        }),
                        /* @__PURE__ */ jsxs("form", {
                            onSubmit: submit, children: [
                                /* @__PURE__ */ jsx(
                                    TextInput,
                                    {
                                        id: "email",
                                        type: "email",
                                        name: "email",
                                        value: data.email,
                                        className: "mt-1 block w-full",
                                        isFocused: true,
                                        onChange: (e) => setData("email", e.target.value)
                                    }
                                ),
                                /* @__PURE__ */ jsx(InputError, {message: errors.email, className: "mt-2"}),
                                /* @__PURE__ */ jsx("div", {
                                    className: "flex items-center justify-center mt-4",
                                    children: /* @__PURE__ */ jsx(PrimaryButton, {
                                        className: "ms-4",
                                        disabled: processing,
                                        children: "Email Password Reset Link"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
export {
    ForgotPassword as default
};
