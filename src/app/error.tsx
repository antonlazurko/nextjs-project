'use client'
export interface GlobalErrorProps {
    error: Error
}

export default function GlobalError({ error }: GlobalErrorProps) {
    return (
        <html>
            <body>
                <h1>Something went wrong Global</h1>
                <p>{error.message}</p>
            </body>
        </html>
    )
}