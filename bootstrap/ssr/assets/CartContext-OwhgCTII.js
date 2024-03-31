import "react/jsx-runtime";
import {createContext} from "react";

const CartContext = createContext({
    quantity: 0,
    isOpen: false,
    openCart: () => {
    },
    closeCart: () => {
    }
});
export {
    CartContext as C
};
