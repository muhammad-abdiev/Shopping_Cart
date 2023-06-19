import { SVGProps } from 'react'

export const IconClose = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m6 6 12.774 12.774M6 18.774 18.774 6"
            stroke="#FFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
