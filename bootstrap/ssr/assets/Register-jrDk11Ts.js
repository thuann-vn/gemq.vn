import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {useEffect} from "react";
import {I as InputError} from "./InputError-NzwfGsTp.js";
import {I as InputLabel} from "./InputLabel-Febp5y5Y.js";
import {P as PrimaryButton} from "./PrimaryButton-HW0iU44d.js";
import {T as TextInput} from "./TextInput-4P_gfX6y.js";
import {Head, Link, useForm} from "@inertiajs/react";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";

function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);
    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(Head, {title: "Register"}),
            /* @__PURE__ */ jsx("div", {
                className: "flex min-h-[500px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8",
                children: /* @__PURE__ */ jsxs("div", {
                    className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
                    children: [
                        /* @__PURE__ */ jsx("h2", {
                            className: "mt-2 text-center text-3xl font-extrabold text-gray-900",
                            children: "Create an account"
                        }),
                        /* @__PURE__ */ jsxs("form", {
                            onSubmit: submit, children: [
                                /* @__PURE__ */ jsxs("div", {
                                    children: [
                                        /* @__PURE__ */ jsx(InputLabel, {htmlFor: "name", value: "Name"}),
                                        /* @__PURE__ */ jsx(
                                            TextInput,
                                            {
                                                id: "name",
                                                name: "name",
                                                value: data.name,
                                                className: "mt-1 block w-full",
                                                autoComplete: "name",
                                                isFocused: true,
                                                onChange: (e) => setData("name", e.target.value),
                                                required: true
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(InputError, {message: errors.name, className: "mt-2"})
                                    ]
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "mt-4", children: [
                                        /* @__PURE__ */ jsx(InputLabel, {htmlFor: "email", value: "Email"}),
                                        /* @__PURE__ */ jsx(
                                            TextInput,
                                            {
                                                id: "email",
                                                type: "email",
                                                name: "email",
                                                value: data.email,
                                                className: "mt-1 block w-full",
                                                autoComplete: "username",
                                                onChange: (e) => setData("email", e.target.value),
                                                required: true
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(InputError, {message: errors.email, className: "mt-2"})
                                    ]
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "mt-4", children: [
                                        /* @__PURE__ */ jsx(InputLabel, {htmlFor: "password", value: "Password"}),
                                        /* @__PURE__ */ jsx(
                                            TextInput,
                                            {
                                                id: "password",
                                                type: "password",
                                                name: "password",
                                                value: data.password,
                                                className: "mt-1 block w-full",
                                                autoComplete: "new-password",
                                                onChange: (e) => setData("password", e.target.value),
                                                required: true
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(InputError, {message: errors.password, className: "mt-2"})
                                    ]
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "mt-4", children: [
                                        /* @__PURE__ */ jsx(InputLabel, {
                                            htmlFor: "password_confirmation",
                                            value: "Confirm Password"
                                        }),
                                        /* @__PURE__ */ jsx(
                                            TextInput,
                                            {
                                                id: "password_confirmation",
                                                type: "password",
                                                name: "password_confirmation",
                                                value: data.password_confirmation,
                                                className: "mt-1 block w-full",
                                                autoComplete: "new-password",
                                                onChange: (e) => setData("password_confirmation", e.target.value),
                                                required: true
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(InputError, {
                                            message: errors.password_confirmation,
                                            className: "mt-2"
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "flex items-center justify-end mt-4", children: [
                                        /* @__PURE__ */ jsx(
                                            Link,
                                            {
                                                href: route("login"),
                                                className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                children: "Already registered?"
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(PrimaryButton, {
                                            className: "ms-4",
                                            disabled: processing,
                                            children: "Register"
                                        })
                                    ]
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
    Register as default
};
