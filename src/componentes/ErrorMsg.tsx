import { ReactNode } from "react"

//PropsWithChildren ó:
type ErrorMessageProps = {
    children: ReactNode
}

const ErrorMsg = ({ children} :ErrorMessageProps) => {
    return (
        <p className='p-2 text-red-500 font-bold text-sm text-center'>
            {children} </p>
    )
}

export default ErrorMsg