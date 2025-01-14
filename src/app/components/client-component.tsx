'use client';


export interface ClientComponentProps {
    children: React.ReactNode
}

export default function ClientComponent({ children }: ClientComponentProps) {
    console.log('Client Component');

    return <>
    <span>Client Component</span>
    {children}
    </>
}