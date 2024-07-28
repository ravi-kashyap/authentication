"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps{
    children: React.ReactNode;
    mode?:"model" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
        children,
        mode = "redirect",
        asChild
    }: LoginButtonProps)=>{

        const Router = useRouter()
        const onClick= ()=>{
           Router.push("/auth/login")
        }

return (
    <span onClick={onClick} className="cursor-pointer">
        {children}
    </span>
)
}

