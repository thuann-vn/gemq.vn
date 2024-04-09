import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {P as PrimaryButton} from "./PrimaryButton-HW0iU44d.js";
import {Head, Link, useForm} from "@inertiajs/react";

function VerifyEmail({status}) {
    const {post, processing} = useForm({});
    const submit = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(Head, {title: "Email Verification"}),
            /* @__PURE__ */ jsx("div", {
                className: "flex min-h-[500px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8",
                children: /* @__PURE__ */ jsxs("div", {
                    className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",
                    children: [
                        /* @__PURE__ */ jsx("h2", {
                            className: "mt-2 text-center text-3xl font-extrabold text-gray-900",
                            children: "Verify your email address"
                        }),
                        /* @__PURE__ */ jsx("div", {
                            className: "mt-2 mb-4 text-sm text-gray-600",
                            children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
                        }),
                        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", {
                            className: "mb-4 font-medium text-sm text-green-600",
                            children: "A new verification link has been sent to the email address you provided during registration."
                        }),
                        /* @__PURE__ */ jsx("form", {
                            onSubmit: submit, children: /* @__PURE__ */ jsxs("div", {
                                className: "mt-4 flex items-center justify-between", children: [
                                    /* @__PURE__ */ jsx(PrimaryButton, {
                                        disabled: processing,
                                        children: "Resend Verification Email"
                                    }),
                                    /* @__PURE__ */ jsx(
                                        Link,
                                        {
                                            href: route("logout"),
                                            method: "post",
                                            as: "button",
                                            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                            children: "Log Out"
                                        }
                                    )
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
export {
    VerifyEmail as default
};
