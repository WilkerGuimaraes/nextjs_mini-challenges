import { ClientSideSection } from "components/clientSideSection";
import { Header } from "components/header";
import { Root } from "types/users.types";

async function getUsers() {
  const data = await fetch("http://localhost:3333/users?_page=1&_per_page=30");
  const response = data.json();

  return response;
}

export default async function Home() {
  const users: Root = await getUsers();

  return (
    <main className="mx-auto my-16 max-w-4xl space-y-12 px-12 lg:px-0">
      <div className="flex items-center justify-between">
        <Header />
      </div>

      <ClientSideSection initialUsers={users.data} />
    </main>
  );
}
