import {useShoppingCart} from "../context/useShoppingCart";
import {useProducts} from "../hooks/product";
import {formatCurrency} from "../utils/formatCurrency";
import { CartItem } from "./Cartitem";

export function ShoppingCart() {
    const {cartItems, closeCart} = useShoppingCart()
    const {products} = useProducts()

    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = products.find(product => product.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)

    return (
        <>
            <div
                className='bg-black/50 fixed top-0 bottom-0 right-0 left-0'
                onClick={closeCart}
            />

            <div className='bg-white top-0 bottom-0 right-0 fixed w-[560px] p-3 flex flex-col text-gray-600'>
                <div className='flex justify-between items-center pb-3 mb-3 border-b border-b-gray-500'>
                    <span className='text-2xl font-bold'>Cart</span>

                    <button
                        className='bg-gray-700  w-10 h-10 my-2 text-center text-center text-white rounded-full hover:shadow-lg hover:shadow-gray-500 hover:bg-amber-400 hover:scale-105 duration-150'
                        onClick={closeCart}
                    >
                        &times;
                    </button>
                </div>

                <div className=''>
                    {cartItems.map(item => <CartItem item={item} key={item.id}/>)}
                </div>

                <div className='text-2xl font-bold mt-5 ml-auto'>
                    Total: <span>{formatCurrency(totalPrice)}</span>
                </div>
            </div>
        </>
    )
}