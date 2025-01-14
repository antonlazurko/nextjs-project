import ErrorButton from "@/app/components/error-button";

export default function Page() {
    console.log('Page');
    return <main>
    <h1 className="text-xl">Dashboard</h1>
    <ErrorButton />
    </main>
}