interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <div className='bg-red-100 text-center text-red-800 px-4 py-2 my-2 rounded-lg shadow-lg shadow-gray-300'>
            <span className='font-medium'>Error!</span> {error}
        </div>
    )
}