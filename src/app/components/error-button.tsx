'use client';

import { useEffect, useState } from "react";

export default function ErrorButton() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count > 2) {
            throw new Error('Count is greater than 2');
        }
    }, [count]);
    return (
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    )
}