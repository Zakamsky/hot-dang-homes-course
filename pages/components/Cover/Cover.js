import Image from "next/image"

export const Cover = ({children, bgImgUrl, alt}) => {
    return <div className="h-screen bg-slate-800 relative min-h-[400px] flex justify-center items-center">
        Cover:
        {bgImgUrl}
        <Image alt={alt} src={bgImgUrl} layout="fill" objectFit="cover" className="mix-blend-soft-light object-cover"/>
        <hr/>
        {children}
    </div>
}