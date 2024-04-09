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

function Checkbox({className = "", ...props}) {
    return /* @__PURE__ */ jsx(
        "input",
        {
            ...props,
            type: "checkbox",
            className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
        }
    );
}

function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: "",
        password: "",
        remember: false
    });
    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);
    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(Head, {title: "Log in"}),
            /* @__PURE__ */ jsx("div", {
                className: "flex min-h-[500px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8",
                children: /* @__PURE__ */ jsxs("div", {
                    className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
                    children: [
                        /* @__PURE__ */ jsxs("div", {
                            className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
                                /* @__PURE__ */ jsx("h2", {
                                    className: "mt-2 text-center text-3xl font-extrabold text-gray-900",
                                    children: "Sign in to your account"
                                }),
                                /* @__PURE__ */ jsxs("p", {
                                    className: "mt-2 text-center text-sm text-gray-600 max-w", children: [
                                        "Or",
                                        " ",
                                        /* @__PURE__ */ jsx(Link, {
                                            href: route("register"),
                                            className: "font-medium text-blue-600 hover:text-blue-500",
                                            children: "create an account"
                                        })
                                    ]
                                })
                            ]
                        }),
                        status && /* @__PURE__ */ jsx("div", {
                            className: "mb-4 font-medium text-sm text-green-600",
                            children: status
                        }),
                        /* @__PURE__ */ jsxs("form", {
                            onSubmit: submit, children: [
                                /* @__PURE__ */ jsxs("div", {
                                    children: [
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
                                                isFocused: true,
                                                onChange: (e) => setData("email", e.target.value)
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
                                                autoComplete: "current-password",
                                                onChange: (e) => setData("password", e.target.value)
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(InputError, {message: errors.password, className: "mt-2"})
                                    ]
                                }),
                                /* @__PURE__ */ jsx("div", {
                                    className: "block mt-4", children: /* @__PURE__ */ jsxs("label", {
                                        className: "flex items-center", children: [
                                            /* @__PURE__ */ jsx(
                                                Checkbox,
                                                {
                                                    name: "remember",
                                                    checked: data.remember,
                                                    onChange: (e) => setData("remember", e.target.checked)
                                                }
                                            ),
                                            /* @__PURE__ */ jsx("span", {
                                                className: "ms-2 text-sm text-gray-600",
                                                children: "Remember me"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "flex items-center justify-end mt-4", children: [
                                        canResetPassword && /* @__PURE__ */ jsx(
                                            Link,
                                            {
                                                href: route("password.request"),
                                                className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                children: "Forgot your password?"
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(PrimaryButton, {
                                            className: "ms-4",
                                            disabled: processing,
                                            children: "Log in"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /* @__PURE__ */ jsxs("div", {
                            className: "mt-6", children: [
                                /* @__PURE__ */ jsxs("div", {
                                    className: "relative", children: [
                                        /* @__PURE__ */ jsx("div", {
                                            className: "absolute inset-0 flex items-center",
                                            children: /* @__PURE__ */ jsx("div", {className: "w-full border-t border-gray-300"})
                                        }),
                                        /* @__PURE__ */ jsx("div", {
                                            className: "relative flex justify-center text-sm",
                                            children: /* @__PURE__ */ jsx("span", {
                                                className: "px-2 bg-gray-100 text-gray-500",
                                                children: "Or continue with"
                                            })
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "mt-6 grid grid-cols-3 gap-3", children: [
                                        /* @__PURE__ */ jsx("div", {
                                            children: /* @__PURE__ */ jsx(
                                                "a",
                                                {
                                                    href: "#",
                                                    className: "w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",
                                                    children: /* @__PURE__ */ jsx(
                                                        "img",
                                                        {
                                                            className: "h-5 w-5",
                                                            src: "https://www.svgrepo.com/show/512120/facebook-176.svg",
                                                            alt: ""
                                                        }
                                                    )
                                                }
                                            )
                                        }),
                                        /* @__PURE__ */ jsx("div", {
                                            children: /* @__PURE__ */ jsx(
                                                "a",
                                                {
                                                    href: "#",
                                                    className: "w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",
                                                    children: /* @__PURE__ */ jsx(
                                                        "img",
                                                        {
                                                            className: "h-5 w-5",
                                                            src: "https://www.svgrepo.com/show/513008/twitter-154.svg",
                                                            alt: ""
                                                        }
                                                    )
                                                }
                                            )
                                        }),
                                        /* @__PURE__ */ jsx("div", {
                                            children: /* @__PURE__ */ jsx(
                                                "a",
                                                {
                                                    href: "#",
                                                    className: "w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",
                                                    children: /* @__PURE__ */ jsx(
                                                        "img",
                                                        {
                                                            className: "h-6 w-6",
                                                            src: "https://www.svgrepo.com/show/506498/google.svg",
                                                            alt: ""
                                                        }
                                                    )
                                                }
                                            )
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
    Login as default
};
