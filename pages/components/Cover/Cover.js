import Image from "next/image"

export const Cover = ({children, bgImgUrl, alt}) => {
    return <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
        <Image alt={alt} src={bgImgUrl} layout="fill" objectFit="cover" className="mix-blend-soft-light object-cover"/>
        <div className="max-w-5xl z-10">
            {children}
        </div>
    </div>
}