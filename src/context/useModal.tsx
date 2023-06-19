import {createContext, ReactNode, useContext, useState} from "react";

interface IModal {
    modal: boolean
    open: () => void
    close: () => void
}

interface ModalStateProps {
    children: ReactNode
}

const ModalContext = createContext({} as IModal)

export function useModal() {
    return useContext(ModalContext)
}

export function ModalState({children}: ModalStateProps) {
    const [modal, setModal] = useState(false)

    const open = () => setModal(true)
    const close = () => setModal(false)

    return (
        <ModalContext.Provider value={{modal, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}