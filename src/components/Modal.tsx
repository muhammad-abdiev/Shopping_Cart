import {ReactNode} from "react";

interface ModalProps {
    title: string
    children: ReactNode
    onClose: () => void
}

export function Modal({title, children, onClose}: ModalProps) {
    return (
        <>
            <div
                className='bg-black/50 top-0 right-0 bottom-0 left-0 fixed'
                onClick={onClose}
            />

            <div className='fixed left-1/2 top-[15%] -translate-x-1/2 w-[500px] bg-white rounded-lg p-3 text-gray-600'>
                <h2 className='text-center text-xl font-bold my-2'>{title}</h2>
                {children}
            </div>
        </>
    )
}