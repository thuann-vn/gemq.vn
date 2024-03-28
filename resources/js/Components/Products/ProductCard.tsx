import * as React from "react";
import {useContext} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import axios from "axios";
import {CartContext} from "@/Contexts/CartContext";
import {classNames} from "@/Utils/Helper";
import {PageProps, Product} from "@/types";

export default function ProductCard({product, className = '', onRemoveFromWishList, showCartButton = false}: { product: Product, className?: string, onRemoveFromWishList?: any, showCartButton?: boolean }) {
    const {openCart} = useContext(CartContext);
    const {auth, wishlist = []} = usePage<PageProps>().props;
    const addProductToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        axios.post(route('cart.add-to-cart', {id: product.id, qty: 1})).then((response) => {
            router.reload({only: ['cart']})
            openCart();
        });
    }

    const addToWishlist = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!auth.user) {
            alert('You must login first');
            return;
        }

        if (wishlist.includes(product.id)) {
            let confirmed = confirm('Are you sure to remove this product from wishlist?');
            if (confirmed) {
                axios.delete(route('profile.remove-wishlist', {id: product.id})).then((response) => {
                    alert('Product removed from wishlist');
                    onRemoveFromWishList && onRemoveFromWishList();
                    router.reload({only: ['wishlist']})
                });
            }
            return;
        }

        axios.post(route('profile.add-wishlist', {id: product.id})).then((response) => {
            alert('Product added to wishlist');
            router.reload({only: ['wishlist']})
        });
    }

    const renderProductBadge = () => {
        if(product.featured){
            return (
                <div className={"text-green-800 text-sm font-bold bg-green-200 absolute top-2 left-2 rounded-lg px-2 py-1"}>Featured</div>
            )
        }
        return null;
    }

    // @ts-ignore
    return (
        <div className={classNames("product-card bg-white group", className)}>
            <div className={"relative d-flex flex-column justify-content-center align-items-center"}>
                <div className={"relative overflow-hidden"}>
                    <Link href={route('shop.detail', {slug: product.slug})} className={"block"}>
                        <img src={product.featured_image_url} alt={product.name}
                             className="w-full group-hover:scale-110 transition-all duration-300"/>
                    </Link>
                    <div className="product-buttons absolute top-[15px] right-[15px] z-10">

                    </div>
                </div>
                <Link href={route('shop.detail', {slug: product.slug})} className={"block p-[20px] pt-0"}>
                    {renderProductBadge()}
                    <h3 className="mt-4 text-main-600 font-bold line-clamp-2 min-h-[48px]">{product.name}</h3>
                    <p>
                        {product.description}
                    </p>
                </Link>
            </div>
        </div>
    )
}
