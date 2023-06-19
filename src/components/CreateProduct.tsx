import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'
import { ErrorMessage } from './ErrorMessage'

const productData: IProduct = {
  id: Date.now(),
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()

    if (value.trim().length === 0) {
      setError('Please enter valid title...')
      return
    }

    productData.title = value
    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    )
    onCreate(response.data)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="w-full outline-0 border rounded-lg px-4 py-2"
          placeholder="Enter product title..."
          value={value}
          onChange={changeHandler}
        />

        {error && <ErrorMessage error={error} />}

        <button
          className="bg-gray-700  px-3 py-2 my-2 text-center text-white rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:bg-amber-400 hover:scale-105 duration-150"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  )
}
