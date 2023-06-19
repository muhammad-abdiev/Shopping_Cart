import { Product } from "../components/Product";
import {useProducts} from "../hooks/product";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";
import {useModal} from "../context/useModal";

export function ProductsPage() {
    const {products, addProducts, loading, error} = useProducts()
    const {modal, open, close} = useModal()

    const createHandler = (product: IProduct) => {
        close()
        addProducts(product)
    }

    return (
        <div className='container mx-auto px-3 mt-5 relative'>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            <div className='flex flex-wrap gap-[20px]'>
                {products.map(product => <Product product={product} key={product.id}/>)}
            </div>

            {modal &&
                <Modal title='Create Product' onClose={close}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>
            }

            <button
                className='fixed bottom-10 right-10 w-10 h-10 text-white text-center text-xl font-bold bg-amber-400 rounded-full hover:shadow-lg hover:shadow-gray-500 hover:animate-pulse hover:scale-105 duration-150'
                onClick={open}
            >
                +
            </button>
        </div>
    )
}