import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProducts(response.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            const error = e as AxiosError
            setError(error.message)
        }
    }

    function addProducts(product: IProduct) {
        setProducts(prev => [product, ...prev])
    }

    useEffect(() => {
        fetchProducts()
    }, [setProducts])


    return {products, loading, error, addProducts}
}