import AddCompanyButton from "@/app/components/add-company-button";
import ErrorButton from "./components/error-button";

export default function Home() {

  return (
      <main>
        <h1 className="text-xl">Home page</h1>
        <AddCompanyButton />
        <ErrorButton />
      </main>
  );
}
