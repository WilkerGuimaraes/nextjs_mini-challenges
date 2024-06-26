import { CreateNewUser } from "@/components/create-user-form";

interface UserProps {
  id: string;
  name: string;
  email: string;
}

async function getData() {
  const response = await fetch("http://localhost:3333/users", {
    next: { tags: ["get-users"] },
  });
  const data = response.json();

  return data;
}

export default async function Home() {
  const users: UserProps[] = await getData();

  return (
    <main className="mx-auto flex flex-col items-center gap-4 p-8 md:items-start">
      <CreateNewUser />

      <div className="w-full rounded-lg border border-zinc-300 p-6">
        {users && (
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <li key={user.id} className="p-4 shadow-md">
                <h1 className="text-xl font-bold">{user.name}</h1>
                <p className="text-zinc-400">{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
