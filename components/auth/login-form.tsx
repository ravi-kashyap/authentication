import { CardWrapper } from "./card-wrapper"


export const LoginForm =()=>{
    return (
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            Login Forms
        </CardWrapper>
    )
}