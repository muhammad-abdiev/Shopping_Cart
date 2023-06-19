import {useEffect, useState} from "react";

export function useLocalStorage<T>(key: string) {
    const [value, setValue] = useState<T[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(key) || '[]')
        setValue(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}