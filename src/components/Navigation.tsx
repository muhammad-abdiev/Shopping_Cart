import { Link } from "react-router-dom";
import {IconStore} from "../assets/icon/IconStore";
import {useShoppingCart} from "../context/useShoppingCart";

export function Navigation() {
    const {cartQuantity, openCart} = useShoppingCart()

    return (
        <nav className='bg-gray-700 shadow-lg shadow-gray-600 text-white'>
            <div className='container mx-auto flex items-center justify-between h-[65px] p-3'>
                <span className='text-xl font-bold'>Shopping store</span>

                <div className='text-lg'>
                    <Link to='/' className='p-6 hover:shadow-lg hover:shadow-amber-500 hover:bg-amber-400'>Products</Link>
                    <Link to='/about' className='p-6 hover:shadow-lg hover:shadow-amber-500 hover:bg-amber-400'>About</Link>
                </div>

                {cartQuantity > 0 &&
                    <button
                        className='border rounded-full p-2 relative '
                        onClick={openCart}
                    >
                        <div className='w-5 h-5'>
                            <IconStore/>
                        </div>

                        <div className='absolute bg-amber-500 rounded-full w-5 h-5 text-sm left-1/2 top-5'>
                            {cartQuantity}
                        </div>
                    </button>
                }
            </div>
        </nav>
    )
}