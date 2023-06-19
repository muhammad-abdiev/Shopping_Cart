import {useState} from "react";
import { formatCurrency } from "../utils/formatCurrency";
import {useShoppingCart} from "../context/useShoppingCart";
import {Button} from "./Button/Button";
import {Image} from "./img/Image";

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)
    const {getItemQuantity, increaseItem, decreaseItem, removeItem} = useShoppingCart()
    const quantity = getItemQuantity(product.id)

    const clickHandler = () => setDetails(prev => !prev)

    return (
        <div
            className='flex flex-col items-center text-gray-600 w-[300px] p-3 border rounded-lg shadow-md cursor-pointer hover:shadow-[-3px_0_40px_rgba(0,0,0,0.1),_0_0_10px_rgba(164,164,164,0.3)]'
        >
            <Image imgSrc={product.image} w={"150"} h={"150"} />

            <p className='text-center text-sm my-3'>{product.title}</p>
            <p className='font-bold'>{formatCurrency(product.price)}</p>

            <Button title={details ? 'Hide' : 'Show'} onClick={clickHandler} type={'button'}/>

            {details &&
                <div className='flex flex-col items-center justify-between my-2 w-4/5'>
                    <p className='text-sm h-[56px] overflow-y-auto' >{product.description}</p>
                    <p className='font-bold mt-3'>{product.category}</p>
                </div>
            }

            {!quantity ? (
                <Button title={'Add To Cart'} type={'button'} onClick={() => increaseItem(product.id)}/>
            ) : (
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex items-center gap-4'>
                        <button
                            className='w-9 h-9 text-white text-center text-xl font-bold bg-amber-400 rounded-full'
                            onClick={() => decreaseItem(product.id)}
                        >
                            -
                        </button>

                        <div>
                            <span>{quantity}</span> in to cart
                        </div>

                        <button
                            className='w-9 h-9 rounded-full bg-amber-400 text-xl text-center text-white font-bold'
                            onClick={() => increaseItem(product.id)}
                        >
                            +
                        </button>
                    </div>

                    <button
                        className='px-3 py-2 rounded-lg bg-amber-400 text-center text-white font-medium'
                        onClick={() => removeItem(product.id)}
                    >
                        Remove
                    </button>
                </div>
            )}
        </div>
    )
}