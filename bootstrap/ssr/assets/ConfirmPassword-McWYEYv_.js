import {jsxs, Fragment, jsx} from "react/jsx-runtime";
import {useEffect} from "react";
import {I as InputError} from "./InputError-NzwfGsTp.js";
import {I as InputLabel} from "./InputLabel-Febp5y5Y.js";
import {P as PrimaryButton} from "./PrimaryButton-HW0iU44d.js";
import {T as TextInput} from "./TextInput-4P_gfX6y.js";
import {useForm, Head} from "@inertiajs/react";
import "./Helper-fobfuv7J.js";
import "moment";
import "moment/dist/locale/vi.js";

function ConfirmPassword() {
    const {data, setData, post, processing, errors, reset} = useForm({
        password: ""
    });
    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);
    const submit = (e) => {
        e.preventDefault();
        post(route("password.confirm"));
    };
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(Head, {title: "Confirm Password"}),
            /* @__PURE__ */ jsx("div", {
                className: "flex min-h-[500px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8",
                children: /* @__PURE__ */ jsxs("div", {
                    className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
                    children: [
                        /* @__PURE__ */ jsx("div", {
                            className: "mb-4 text-sm text-gray-600",
                            children: "This is a secure area of the application. Please confirm your password before continuing."
                        }),
                        /* @__PURE__ */ jsxs("form", {
                            onSubmit: submit, children: [
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
                                                isFocused: true,
                                                onChange: (e) => setData("password", e.target.value)
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(InputError, {message: errors.password, className: "mt-2"})
                                    ]
                                }),
                                /* @__PURE__ */ jsx("div", {
                                    className: "flex items-center justify-end mt-4",
                                    children: /* @__PURE__ */ jsx(PrimaryButton, {
                                        className: "ms-4",
                                        disabled: processing,
                                        children: "Confirm"
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
    ConfirmPassword as default
};
