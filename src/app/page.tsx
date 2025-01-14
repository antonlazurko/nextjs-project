import AddCompanyButton from "@/app/components/add-company-button";
import ClientComponent from "@/app/components/client-component";
import ServerComponent from "@/app/components/server-component";
import ServerComponentCopy from "@/app/components/server-component-copy";

export default function Home() {

  return (
      <main>
        <h1 className="text-xl">Home page</h1>
        <AddCompanyButton />
        <ClientComponent>
          <ServerComponentCopy />
        </ClientComponent>
        <ServerComponent />
      </main>
  );
}
