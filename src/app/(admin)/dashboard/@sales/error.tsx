"use client"

import Button from "@/app/components/button"
export interface ErrorComponentProps {
    error: Error
    reset: () => void
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
    return (
        <div>
            <h1>Something went wrong SALES</h1>
            <p>{error.message}</p>
            <Button onClick={() => reset()}>Try Again</Button>
        </div>
    )
}