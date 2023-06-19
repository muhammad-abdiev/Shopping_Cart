interface Rating {
    rate: number;
    count: number;
}

interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: Rating;
}


interface CartItem {
    id: number
    quantity: number
}

declare module "*.jpg";
declare module '*.png'
declare function require(string): string;