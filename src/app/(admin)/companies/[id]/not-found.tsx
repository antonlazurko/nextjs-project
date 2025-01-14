import Link from "next/link"

export default function NotFound() {

    return (
        <div>
            <h1>Company not found</h1>
            <Link href="/companies" className="text-blue-700">Go back to companies</Link>
        </div>
    )
}