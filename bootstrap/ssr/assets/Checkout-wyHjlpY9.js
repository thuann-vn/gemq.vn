import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {Head, Link, router} from "@inertiajs/react";
import {C as CustomCurrencyFormat} from "./CurrencyFormat-NUeB0jkB.js";
import * as React from "react";
import {Fragment as Fragment$1, useEffect, useState} from "react";
import {Combobox, Transition} from "@headlessui/react";
import {ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {c as classNames, i as imageStorageUrl} from "./Helper-fobfuv7J.js";
import axios from "axios";
import {I as InputLabel} from "./InputLabel-Febp5y5Y.js";
import {T as TextInput} from "./TextInput-4P_gfX6y.js";
import {P as PrimaryButton} from "./PrimaryButton-HW0iU44d.js";
import {C as CheckoutSteps} from "./CheckoutSteps-GerrVTFw.js";
import {A as Alert} from "./Alert-5wTZXjfY.js";
import "react-currency-format";
import "moment";
import "moment/dist/locale/vi.js";

function CheckoutItems({items}) {
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx("p", {className: "text-xl font-medium", children: "Order Summary"}),
            /* @__PURE__ */ jsx("p", {
                className: "text-gray-400",
                children: "Check your items. And select a suitable shipping method."
            }),
            /* @__PURE__ */ jsx("div", {
                className: "mt-3 space-y-2 bg-white", children: items.map((item, index) => {
                    return /* @__PURE__ */ jsxs("div", {
                        className: "flex flex-col rounded-lg bg-white sm:flex-row", children: [
                            /* @__PURE__ */ jsx("img", {
                                className: "h-24 w-28 rounded-md border object-cover object-center",
                                src: item.options.image,
                                alt: ""
                            }),
                            /* @__PURE__ */ jsxs("div", {
                                className: "flex w-full flex-col px-4 py-4", children: [
                                    /* @__PURE__ */ jsx("a", {
                                        href: item.options.href,
                                        className: "font-semibold",
                                        children: item.name
                                    }),
                                    item.options.variant_description ? /* @__PURE__ */ jsx("p", {
                                        className: "text-sm text-gray-400",
                                        children: item.options.variant_description
                                    }) : null,
                                    /* @__PURE__ */ jsxs("p", {
                                        className: "text-lg font-bold", children: [
                                            /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: item.price}),
                                            " ",
                                            /* @__PURE__ */ jsxs("span", {
                                                className: "text-sm text-gray-400", children: [
                                                    "x ",
                                                    item.qty
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, index);
                })
            })
        ]
    });
}

function ShippingMethods({methods, onChange}) {
    return /* @__PURE__ */ jsxs("div", {
        children: [
            /* @__PURE__ */ jsx("p", {className: "mt-8 text-lg font-medium", children: "Shipping Methods"}),
            /* @__PURE__ */ jsx("div", {
                className: "mt-5 grid grid-cols-2 gap-6",
                children: methods.map((method, index) => /* @__PURE__ */ jsxs("div", {
                    className: "relative", children: [
                        /* @__PURE__ */ jsx(
                            "input",
                            {
                                className: "peer hidden",
                                id: `shipping_method_${index}`,
                                type: "radio",
                                name: "shipping_method",
                                value: method.code,
                                onClick: (e) => onChange(method)
                            }
                        ),
                        /* @__PURE__ */ jsx("span", {className: "peer-checked:border-main-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"}),
                        /* @__PURE__ */ jsx(
                            "label",
                            {
                                className: "peer-checked:border-2 peer-checked:border-main-700 peer-checked:bg-main-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 pr-10",
                                htmlFor: `shipping_method_${index}`,
                                children: /* @__PURE__ */ jsxs("div", {
                                    className: "ml-5", children: [
                                        /* @__PURE__ */ jsx("span", {
                                            className: "mt-2 font-semibold",
                                            children: method.name
                                        }),
                                        /* @__PURE__ */ jsx("p", {
                                            className: "text-slate-500 text-sm leading-6",
                                            children: method.description
                                        })
                                    ]
                                })
                            }
                        )
                    ]
                }, index))
            })
        ]
    });
}

function Select({name, options, value, onChange, placeholder = "", required = false, className}) {
    const [selected, setSelected] = useState(options.find((option) => option.value === value) ?? null);
    const [query, setQuery] = useState("");
    useEffect(() => {
        setSelected(options.find((option) => option.value === value) ?? null);
    }, [value]);
    const filteredOptions = query === "" ? options : options.filter(
        (option) => option.label.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    );
    return /* @__PURE__ */ jsx(
        Combobox,
        {
            value: selected,
            onChange: (value2) => {
                onChange(value2 == null ? void 0 : value2.value);
                setSelected(value2);
            },
            children: /* @__PURE__ */ jsxs("div", {
                className: classNames("relative", className), children: [
                    /* @__PURE__ */ jsxs(
                        "div",
                        {
                            className: "relative rounded-md border border-gray-200 py-1 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
                            children: [
                                /* @__PURE__ */ jsx(
                                    Combobox.Input,
                                    {
                                        className: "w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0",
                                        displayValue: (selected2) => selected2 == null ? void 0 : selected2.label,
                                        onChange: (event) => setQuery(event.target.value),
                                        placeholder,
                                        onFocus: (event) => {
                                            event.target.select();
                                        },
                                        autoComplete: "off",
                                        required,
                                        name
                                    }
                                ),
                                /* @__PURE__ */ jsx(Combobox.Button, {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-2",
                                    children: /* @__PURE__ */ jsx(
                                        ChevronUpDownIcon,
                                        {
                                            className: "h-5 w-5 text-gray-400",
                                            "aria-hidden": "true"
                                        }
                                    )
                                })
                            ]
                        }
                    ),
                    /* @__PURE__ */ jsx(
                        Transition,
                        {
                            as: Fragment$1,
                            leave: "transition ease-in duration-100",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            afterLeave: () => setQuery(""),
                            children: /* @__PURE__ */ jsx(
                                Combobox.Options,
                                {
                                    className: "absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
                                    children: filteredOptions.length === 0 && query !== "" ? /* @__PURE__ */ jsx("div", {
                                        className: "relative cursor-default select-none py-2 text-gray-700",
                                        children: "Nothing found."
                                    }) : filteredOptions.map((option) => /* @__PURE__ */ jsx(
                                        Combobox.Option,
                                        {
                                            className: ({active}) => `relative cursor-default select-none py-2 pl-4 pr-4 ${active ? "bg-main-600 text-white" : "text-gray-900"}`,
                                            value: option,
                                            children: ({selected: selected2, active}) => /* @__PURE__ */ jsx(Fragment, {
                                                children: /* @__PURE__ */ jsx(
                                                    "span",
                                                    {
                                                        className: `block truncate ${selected2 ? "font-medium" : "font-normal"}`,
                                                        children: option.label
                                                    }
                                                )
                                            })
                                        },
                                        option.value
                                    ))
                                }
                            )
                        }
                    )
                ]
            })
        }
    );
}

function CheckoutForm({formData, setFormData}) {
    const [provinces, setProvinces] = React.useState([]);
    const [selectedProvince, setSelectedProvince] = React.useState(null);
    const [districts, setDistricts] = React.useState([]);
    const [selectedDistrict, setSelectedDistrict] = React.useState(null);
    const [wards, setWards] = React.useState([]);
    const [selectedWard, setSelectedWard] = React.useState(null);
    useEffect(() => {
        loadProvinces();
    }, []);
    const loadProvinces = () => {
        axios.get(route("checkout.get-provinces")).then((response) => {
            console.log(response);
            setProvinces(response.data.data.map((province) => {
                return {
                    value: province.code,
                    label: province.full_name
                };
            }));
        });
    };
    const loadDistricts = (provinceCode) => {
        setSelectedDistrict(null);
        setSelectedWard(null);
        setFormData({
            ...formData,
            province_code: provinceCode,
            district_code: "",
            ward_code: ""
        });
        axios.get(route("checkout.get-districts", {province_id: provinceCode})).then((response) => {
            setDistricts(response.data.data.map((district) => {
                return {
                    value: district.code,
                    label: district.full_name
                };
            }));
        });
    };
    const loadWards = (districtCode) => {
        setSelectedWard(null);
        setFormData({
            ...formData,
            district_code: districtCode,
            ward_code: ""
        });
        axios.get(route("checkout.get-wards", {district_id: districtCode})).then((response) => {
            setWards(response.data.data.map((ward) => {
                return {
                    value: ward.code,
                    label: ward.full_name
                };
            }));
        });
    };
    const _setFormData = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };
    return /* @__PURE__ */ jsxs("div", {
        className: "bg-gray-50", children: [
            /* @__PURE__ */ jsx("p", {className: "text-xl font-medium", children: "Payment Details"}),
            /* @__PURE__ */ jsx("p", {
                className: "text-gray-400",
                children: "Complete your order by providing your payment details."
            }),
            /* @__PURE__ */ jsxs("div", {
                className: "", children: [
                    /* @__PURE__ */ jsx(InputLabel, {htmlFor: "full_name", value: "Your name"}),
                    /* @__PURE__ */ jsx(
                        TextInput,
                        {
                            id: "full_name",
                            name: "full_name",
                            onChange: (e) => _setFormData("full_name", e.target.value),
                            placeholder: "Your full name",
                            required: true,
                            className: "capitalize",
                            left: () => /* @__PURE__ */ jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4 text-gray-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /* @__PURE__ */ jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                })
                            })
                        }
                    ),
                    /* @__PURE__ */ jsx(InputLabel, {htmlFor: "phone", value: "Phone number"}),
                    /* @__PURE__ */ jsx(
                        TextInput,
                        {
                            id: "phone",
                            name: "phone",
                            onChange: (e) => _setFormData("phone", e.target.value),
                            placeholder: "0901234567",
                            type: "tel",
                            required: true,
                            left: () => /* @__PURE__ */ jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: "1.5",
                                stroke: "currentColor",
                                className: "h-4 w-4 text-gray-400",
                                children: /* @__PURE__ */ jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                })
                            })
                        }
                    ),
                    /* @__PURE__ */ jsx(InputLabel, {htmlFor: "email", value: "Email"}),
                    /* @__PURE__ */ jsx(
                        TextInput,
                        {
                            id: "email",
                            name: "email",
                            onChange: (e) => _setFormData("email", e.target.value),
                            placeholder: "your.email@gmail.com",
                            type: "email",
                            required: true,
                            left: () => /* @__PURE__ */ jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4 text-gray-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /* @__PURE__ */ jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                })
                            })
                        }
                    ),
                    /* @__PURE__ */ jsx("label", {
                        htmlFor: "address",
                        className: "mt-4 mb-2 block text-sm font-medium",
                        children: "Billing Address"
                    }),
                    /* @__PURE__ */ jsxs("div", {
                        className: "flex flex-col sm:flex-row", children: [
                            /* @__PURE__ */ jsx(
                                TextInput,
                                {
                                    id: "address",
                                    name: "address",
                                    onChange: (e) => _setFormData("address", e.target.value),
                                    placeholder: "Street address",
                                    containerClassName: "w-full me-2",
                                    required: true,
                                    left: () => /* @__PURE__ */ jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "h-4 w-4 text-gray-400",
                                        children: /* @__PURE__ */ jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        })
                                    })
                                }
                            ),
                            /* @__PURE__ */ jsx(
                                Select,
                                {
                                    value: selectedProvince,
                                    onChange: (value) => {
                                        setSelectedProvince(value);
                                        loadDistricts(value);
                                    },
                                    options: provinces,
                                    className: "w-full",
                                    placeholder: "Select province",
                                    required: true,
                                    name: "province_code"
                                }
                            )
                        ]
                    }),
                    /* @__PURE__ */ jsxs("div", {
                        className: "flex flex-col sm:flex-row mt-4 ", children: [
                            /* @__PURE__ */ jsx(
                                Select,
                                {
                                    value: selectedDistrict,
                                    onChange: (value) => {
                                        setSelectedDistrict(value);
                                        loadWards(value);
                                    },
                                    options: districts,
                                    className: "w-full me-2",
                                    placeholder: "Select district",
                                    required: true,
                                    name: "district_code"
                                }
                            ),
                            /* @__PURE__ */ jsx(
                                Select,
                                {
                                    value: selectedWard,
                                    onChange: (value) => {
                                        setSelectedWard(value);
                                        _setFormData("ward_code", value);
                                    },
                                    options: wards,
                                    className: "w-full",
                                    placeholder: "Select ward",
                                    required: true,
                                    name: "ward_code"
                                }
                            )
                        ]
                    })
                ]
            })
        ]
    });
}

function PaymentMethods({methods, onChange}) {
    return /* @__PURE__ */ jsxs("div", {
        children: [
            /* @__PURE__ */ jsx("p", {className: "mt-8 text-lg font-medium", children: "Payment Methods"}),
            /* @__PURE__ */ jsx("div", {
                className: "mt-5 gap-6", children: methods.map((method, index) => /* @__PURE__ */ jsxs("div", {
                    className: "relative mb-3", children: [
                        /* @__PURE__ */ jsx(
                            "input",
                            {
                                className: "peer hidden",
                                id: `payment_method_${index}`,
                                type: "radio",
                                name: "payment_method",
                                value: method.code,
                                onClick: (e) => onChange(method.code)
                            }
                        ),
                        /* @__PURE__ */ jsx("span", {className: "peer-checked:border-main-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"}),
                        /* @__PURE__ */ jsxs(
                            "label",
                            {
                                className: "peer-checked:border-2 peer-checked:border-main-700 peer-checked:bg-main-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 pr-20",
                                htmlFor: `payment_method_${index}`,
                                children: [
                                    /* @__PURE__ */ jsx("img", {
                                        className: "h-12 w-12 rounded-md object-cover object-center",
                                        src: imageStorageUrl(method.image),
                                        alt: ""
                                    }),
                                    /* @__PURE__ */ jsxs("div", {
                                        className: "ml-5", children: [
                                            /* @__PURE__ */ jsx("span", {
                                                className: "mt-2 font-semibold",
                                                children: method.name
                                            }),
                                            /* @__PURE__ */ jsx("p", {
                                                className: "text-slate-500 text-sm leading-6",
                                                children: method.description
                                            })
                                        ]
                                    })
                                ]
                            }
                        )
                    ]
                }, index))
            })
        ]
    });
}

function Checkout({items, subtotal, total, tax, shippingMethods, paymentMethods}) {
    const [submitting, setSubmitting] = React.useState(false);
    const [formData, setFormData] = React.useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        province: "",
        district: "",
        ward: "",
        shipping_method: "",
        payment_method: "",
        notes: ""
    });
    const [errors, setErrors] = React.useState(null);
    const [shippingFee, setShippingFee] = React.useState(0);
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setErrors(null);
        axios.post(route("checkout.place-order"), formData).then((response) => {
            if (response.data.id) {
                router.visit(route("checkout.order-summary"));
            } else {
                setErrors(response.data.message);
                setSubmitting(false);
            }
        }).catch((error) => {
            const errorMessage = error.response.data.message;
            setErrors(errorMessage);
            setSubmitting(false);
        }).finally(() => {
            setSubmitting(false);
        });
    };
    return /* @__PURE__ */ jsxs(Fragment, {
        children: [
            /* @__PURE__ */ jsx(Head, {title: "Checkout"}),
            items.length > 0 ? /* @__PURE__ */ jsxs("div", {
                className: "pb-10 container mx-auto  px-4 sm:px-6 lg:px-8", children: [
                    /* @__PURE__ */ jsxs("div", {
                        className: "flex flex-col items-center border-b bg-white py-4 sm:flex-row", children: [
                            /* @__PURE__ */ jsx("a", {
                                href: "#",
                                className: "text-2xl font-bold text-gray-800",
                                children: "Checkout"
                            }),
                            /* @__PURE__ */ jsx("div", {
                                className: "mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base",
                                children: /* @__PURE__ */ jsx(CheckoutSteps, {step: 2})
                            })
                        ]
                    }),
                    /* @__PURE__ */ jsx("form", {
                        onSubmit, children: /* @__PURE__ */ jsxs("div", {
                            className: "grid lg:grid-cols-2 space-x-0 lg:space-x-10", children: [
                                /* @__PURE__ */ jsx("div", {
                                    className: "pt-8", children: /* @__PURE__ */ jsxs("div", {
                                        children: [
                                            errors ? /* @__PURE__ */ jsx(
                                                Alert,
                                                {
                                                    title: "Please check your input information:",
                                                    message: errors
                                                }
                                            ) : null,
                                            /* @__PURE__ */ jsx(
                                                CheckoutForm,
                                                {
                                                    formData,
                                                    setFormData
                                                }
                                            ),
                                            /* @__PURE__ */ jsx(ShippingMethods, {
                                                methods: shippingMethods, onChange: (value) => {
                                                    setFormData({
                                                        ...formData,
                                                        shipping_method: value.code
                                                    });
                                                    setShippingFee(value.price);
                                                }
                                            }),
                                            /* @__PURE__ */ jsx(PaymentMethods, {
                                                methods: paymentMethods, onChange: (value) => {
                                                    setFormData({
                                                        ...formData,
                                                        payment_method: value
                                                    });
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                    className: "pt-8", children: [
                                        /* @__PURE__ */ jsx(CheckoutItems, {items}),
                                        /* @__PURE__ */ jsxs("div", {
                                            className: "mt-6 border-t border-b py-2", children: [
                                                /* @__PURE__ */ jsxs("div", {
                                                    className: "flex items-center justify-between", children: [
                                                        /* @__PURE__ */ jsx("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: "Subtotal"
                                                        }),
                                                        /* @__PURE__ */ jsx("p", {
                                                            className: "font-semibold text-gray-900",
                                                            children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: subtotal})
                                                        })
                                                    ]
                                                }),
                                                /* @__PURE__ */ jsxs("div", {
                                                    className: "flex items-center justify-between", children: [
                                                        /* @__PURE__ */ jsx("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: "Shipping"
                                                        }),
                                                        /* @__PURE__ */ jsx("p", {
                                                            className: "font-semibold text-gray-900",
                                                            children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: shippingFee ?? 0})
                                                        })
                                                    ]
                                                }),
                                                tax > 0 ? /* @__PURE__ */ jsxs("div", {
                                                    className: "flex items-center justify-between", children: [
                                                        /* @__PURE__ */ jsx("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: "Tax"
                                                        }),
                                                        /* @__PURE__ */ jsx("p", {
                                                            className: "font-semibold text-gray-900",
                                                            children: /* @__PURE__ */ jsx(CustomCurrencyFormat, {value: tax ?? 0})
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs("div", {
                                            className: "mt-6 flex items-center justify-between", children: [
                                                /* @__PURE__ */ jsx("p", {
                                                    className: "text-sm font-medium text-gray-900",
                                                    children: "Total"
                                                }),
                                                /* @__PURE__ */ jsx("p", {
                                                    className: "text-2xl font-semibold text-gray-900",
                                                    children: /* @__PURE__ */ jsx(
                                                        CustomCurrencyFormat,
                                                        {
                                                            value: parseFloat(String(total)) + parseFloat(String(shippingFee))
                                                        }
                                                    )
                                                })
                                            ]
                                        }),
                                        /* @__PURE__ */ jsx(
                                            PrimaryButton,
                                            {
                                                type: "submit",
                                                className: "w-full rounded-full items-center justify-center py-3 mt-3 text-[14px]",
                                                loading: submitting,
                                                children: "Place Order"
                                            }
                                        )
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }) : /* @__PURE__ */ jsxs("div", {
                className: "flex flex-col items-center justify-center py-[250px] min-h-full", children: [
                    /* @__PURE__ */ jsx(
                        "div",
                        {
                            className: "bg-gray-200 rounded-full w-[148px] h-[148px] inline-flex items-end overflow-hidden",
                            children: /* @__PURE__ */ jsxs(
                                "svg",
                                {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 280.028 280.028",
                                    width: "280.028",
                                    height: "80.028",
                                    className: "text-red-600",
                                    children: [
                                        /* @__PURE__ */ jsx("path", {
                                            className: "c-01",
                                            d: "M35.004 0h210.02v78.758H35.004V0z",
                                            fill: "#b7343e"
                                        }),
                                        /* @__PURE__ */ jsx(
                                            "path",
                                            {
                                                className: "c-02",
                                                d: "M262.527 61.256v201.27c0 9.626-7.876 17.502-17.502 17.502H35.004c-9.626 0-17.502-7.876-17.502-17.502V61.256h245.025z",
                                                fill: "currentColor"
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(
                                            "path",
                                            {
                                                className: "c-03",
                                                d: "M35.004 70.007h26.253V26.253L35.004 0v70.007zm183.767-43.754v43.754h26.253V0l-26.253 26.253z",
                                                fill: "currentColor"
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(
                                            "path",
                                            {
                                                className: "c-04",
                                                d: "M61.257 61.256V26.253L17.503 61.256h43.754zm157.514-35.003v35.003h43.754l-43.754-35.003z",
                                                fill: "#ab212b"
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(
                                            "path",
                                            {
                                                className: "c-05",
                                                d: "M65.632 105.01c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c0-5.25-3.5-8.751-8.751-8.751zm148.764 0c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c.001-5.25-3.501-8.751-8.751-8.751z",
                                                fill: "#c13942"
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(
                                            "path",
                                            {
                                                className: "c-06",
                                                d: "M65.632 121.637c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001-.001.874-6.126 6.124-6.126z",
                                                fill: "#c13942"
                                            }
                                        ),
                                        /* @__PURE__ */ jsx(
                                            "path",
                                            {
                                                className: "c-07",
                                                d: "M65.632 112.886c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001 0 .874-6.126 6.124-6.126z",
                                                fill: "#fdfbf7"
                                            }
                                        )
                                    ]
                                }
                            )
                        }
                    ),
                    /* @__PURE__ */ jsx("h1", {
                        className: "font-bold text-red-600 mt-5",
                        children: "YOUR CART IS CURRENTLY EMPTY."
                    }),
                    /* @__PURE__ */ jsx(Link, {
                        href: "/",
                        className: "mt-4 px-8 py-3 bg-main-900 text-white rounded-full",
                        children: "Return to shop"
                    })
                ]
            })
        ]
    });
}
export {
    Checkout as default
};
