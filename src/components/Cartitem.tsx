import {useShoppingCart} from "../context/useShoppingCart";
import {useProducts} from "../hooks/product";
import {formatCurrency} from "../utils/formatCurrency";
import {Image} from "./img/Image";

interface CartItemProps {
    item: CartItem
}

export function CartItem({item}: CartItemProps) {
    const {removeItem} = useShoppingCart()
    const {products} = useProducts()

    const cartItem = products.find(product => product.id === item.id)
    if(cartItem == null) return null

    return (
        <div className='flex items-center justify-between p-3 border rounded-lg shadow-md cursor-pointer hover:shadow-[-3px_0_40px_rgba(0,0,0,0.1),_0_0_10px_rgba(164,164,164,0.3)] w-full h-[150px]'>

            <div className='flex gap-4'>
                <Image imgSrc={cartItem.image} w={'100'} h={'100'} />

                <div className='flex flex-col justify-around'>
                    <p className='text-sm'>{cartItem.title}</p>
                    {item.quantity > 1 && <span className='font-light text-sm'>{item.quantity}x</span>}
                    <p>{formatCurrency(cartItem.price)}</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <p>{formatCurrency(cartItem.price * item.quantity)}</p>

                <button
                    className='w-9 h-9 rounded-full bg-amber-400 text-xl text-center text-white font-bold'
                    onClick={() => removeItem(cartItem.id)}
                >
                    &times;
                </button>
            </div>
        </div>
    )
}