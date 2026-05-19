import { ReactNode } from "react"

interface SetProps{
    children?: ReactNode
}

export default function Footerbox({children}:SetProps){
    return (
        <div className="flex-row sm:w-1/4 justify-center p-5 items-center text-center">
            {children}
        </div>
    )
}