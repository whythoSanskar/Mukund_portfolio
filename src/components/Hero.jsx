export default function Hero() {
    return (
        <>
        <div className="relative">  
        <img src="/thumbs.svg" alt="Logo" className=" absolute left-2 top-2 z-0" />
        <img src="/smili.svg" alt="Logo" className=" absolute left-[22.8rem] top-[-0.5rem] overflow=hidden z-0" />
        <img src="/alien.svg" alt="Logo" className=" absolute right-[6rem] top-[-14rem] overflow=hidden z-0" />
            <div className="flex justify-center mt-36 z-10" >
                <div className="flex flex-col items-center font-albert-900 text-8xl font-extrabold uppercase">
                    <span>PRODUCT DESIGNER, </span> 
                    <span> Caffeinated & </span> 
                    <span>CREATIVELY HIGH</span>
                </div>
            </div>
        <img src="/figma.svg" alt="Logo" className=" absolute left-[25rem] top-[17rem] overflow=hidden z-0" />
        <img src="/brain.svg" alt="Logo" className=" absolute right-[6rem] top-[14rem] overflow=hidden z-0" />
        </div>
        </>
    )
}