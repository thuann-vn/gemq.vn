import {useContext, useState} from 'react'
import {Popover} from '@headlessui/react'
import {Bars3Icon} from '@heroicons/react/24/outline'
import {imageStorageUrl} from "@/Utils/Helper";
import MobileMenu from "@/Components/Layout/MobileMenu";
import {Link, usePage} from "@inertiajs/react";
import {CartContext} from "@/Contexts/CartContext";
import {PageProps} from "@/types";
import ApplicationLogo from "@/Components/Layout/ApplicationLogo";
import NavLink from "@/Components/Layout/NavLink";
import NavDropdown from "@/Components/Layout/NavDropdown";

export default function Header() {
    const [open, setOpen] = useState(false)
    const {general_settings, cart, navigation, auth} = usePage<PageProps>().props;
    const {openCart} = useContext(CartContext);

    const isCurrentPage = (url: string) => {
        return false;
    }


    return (
        <div className="bg-white relative z-20">
            {/* Mobile menu */}
            <MobileMenu open={open} setOpen={setOpen} navigation={navigation}/>

            <header className="bg-white relative border-b border-transparent">
                <nav aria-label="Top" className="mx-auto container px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24 items-center w-full">
                        {/*Mobile toggle*/}
                        <button
                            type="button"
                            className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            onClick={() => setOpen(true)}
                        >
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Logo */}
                        <div className="flex lg:ml-0">
                            <ApplicationLogo/>
                        </div>


                        {/* Flyout menus */}
                        <Popover.Group className="hidden lg:block flex-1 px-10">
                            <div className="flex justify-center items-center space-x-2 bg-white px-2 py-1 uppercase">
                                {Object.keys(navigation.items).map((key) => {
                                    var page = navigation.items[key];
                                    if (page.children && Object.keys(page.children).length > 0) {
                                        return (
                                            <NavDropdown
                                                key={key}
                                                item={page}
                                                isActive={isCurrentPage(page.data.url)}
                                            />
                                        )
                                    } else {
                                        return (
                                            <NavLink key={key}
                                                     href={page.type == 'route' ? route(page.data.url) : page.data.url}
                                                     active={isCurrentPage(page.data.url)}
                                                     icon={page.data.icon ? imageStorageUrl(page.data.icon) : null}
                                                     label={page.label} className={page.data.classes ?? ''}>
                                            </NavLink>
                                        )
                                    }
                                })}
                            </div>
                        </Popover.Group>

                        {/*Hotline*/}
                        <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="sm:ml-6">
                                <div className="flex space-x-2">
                                    <Link href={"tel:" + general_settings.site_phone}
                                          className="animate-wiggle animate-infinite animate-duration-1000 animate-ease-linear animate-normal flex items-center text-[12px] font-medium  bg-main-600 text-white hover:text-main-700 px-4 py-1 md:py-2 rounded-full">
                                        <img src={"/images/hotline.png"} className={"me-1 md:me-3 md:w-10 w-6"}/>
                                        <div className="leading-5">
                                            HOTLINE <br/><span
                                            className={"text-[14px] md:text-[16px] font-bold"}>{general_settings.site_phone}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
