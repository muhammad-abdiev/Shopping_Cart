export function Loader() {
    return (
        <div className='flex justify-center my-4'>
            <div className='inline-block w-8 h-8 border-2 border-amber-400 border-r-transparent rounded-full animate-spin align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'>
                <span className='!absolute !border-0 !-m-px !p-0 !w-px !h-px !overflow-hidden !whitespace-nowrap ![clip:rect(0,0,0,0)]'>
                    Loading...
                </span>
            </div>
        </div>
    )
}