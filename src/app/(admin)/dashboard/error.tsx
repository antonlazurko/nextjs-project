'use client'

import Button from "@/app/components/button";

export interface ErrorComponentProps {
    error: Error
    reset: () => void
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {

    const handleTryAgainClick = () => {
        reset()
    }
    return (
        <div>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <Button onClick={handleTryAgainClick}>Try Again</Button>
        </div>
    )
}