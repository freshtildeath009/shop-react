import { createContext, useState } from "react";
import all_product from "../../public/images/all_product";

export const ShopContext = createContext()

const getDefaultCart = () => {
    let cart = {};

    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart())

    const _addToCart = (id) => {
        setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }

    const _removeFromCart = (id) => {
        setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.forEach(item => item.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
            }
            return totalAmount
        }
    }


    const contextValue = { getTotalAmount, all_product, cartItem, setCartItem, _addToCart, _removeFromCart }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider