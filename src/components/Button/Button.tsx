interface ButtonProps {
    title: string
    onClick?: () => void
    type?: "button" | "submit"
}

export function Button({type, title, onClick}: ButtonProps) {
    return (
        <button
            className='bg-gray-700 text-white px-4 py-2 rounded-lg mt-5 text-center hover:shadow-lg hover:shadow-gray-500 hover:bg-amber-400 hover:scale-105 duration-150 transition-all'
            type={type}
            onClick={onClick}
        >
            {title}
        </button>
    )
}