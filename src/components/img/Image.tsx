interface ImageProps {
    imgSrc: string
    imgAlt?: string
    w: string
    h: string
}

export function Image({h, w, imgAlt, imgSrc}: ImageProps) {
    return (
        <div className={`w-[${w}px] h-[${h}px] flex-shrink-0 overflow-hidden`}>
            <img src={imgSrc} alt={imgAlt} className='w-full h-full object-contain'/>
        </div>
    )
}