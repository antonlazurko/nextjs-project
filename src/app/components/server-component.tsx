export interface ServerComponentProps {
    children: React.ReactNode
}

export default function ServerComponent({ children }: ServerComponentProps) {
    console.log('Server Component');

    return <>
    <span>Server Component</span>
    {children}
    </>
}