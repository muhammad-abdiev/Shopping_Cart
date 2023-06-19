import {createContext, ReactNode, useContext, useState} from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import {useLocalStorage} from "../hooks/useLocalStorage";

interface ICart {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseItem: (id: number) => void
    decreaseItem: (id: number) => void
    removeItem: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

interface CartStateProps {
    children: ReactNode
}

const CartContext = createContext({} as ICart)

export function useShoppingCart() {
    return useContext(CartContext)
}

export function CartState({children}: CartStateProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem>('shopping-cart')
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity,0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return  cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseItem(id: number) {
        setCartItems(prev => {
            if(prev.find(item => item.id === id) == null) {
                return [...prev, {id, quantity: 1}]
            } else {
                return prev.map(item => (item.id === id) ? {...item, quantity: item.quantity + 1} : item)
            }
        })
    }

    function decreaseItem(id: number) {
        setCartItems(prev => {
            if(prev.find(item => item.id === id)?.quantity === 1) {
                return prev.filter(item => item.id !== id)
            } else {
                return prev.map(item => (item.id === id) ? {...item, quantity: item.quantity - 1} : item)
            }
        })
    }

    function removeItem(id: number) {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    return (
        <CartContext.Provider value={{cartItems, cartQuantity, openCart, closeCart, getItemQuantity, increaseItem, decreaseItem, removeItem}}>
            {children}
            {isOpen && <ShoppingCart />}
        </CartContext.Provider>
    )
}