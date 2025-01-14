import { headers } from "next/headers";

export interface ServerComponentCopyProps {
    children: React.ReactNode
}

export default function ServerComponentCopy({ children }: ServerComponentCopyProps) {
    console.log('Server Component copy');
    console.log(headers());

    return <>
    <span>Server Component Copy</span>
    {children}
    </>
}