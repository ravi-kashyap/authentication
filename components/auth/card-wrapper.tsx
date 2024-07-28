"use client"

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";

interface CardWrapperProps{
children:React.ReactNode;
headerLabel: string;
backButtonLabel: string;
backButtonHref: string;
showSocial? : boolean
}

export const CardWrapper=({
children,
headerLabel,
backButtonHref,
backButtonLabel,
showSocial
}:CardWrapperProps)=>{
    return(
         <Card className="w-[400px] shadow-md">
            {children}
         </Card>   
    )
}