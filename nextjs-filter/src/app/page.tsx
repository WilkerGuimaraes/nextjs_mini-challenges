import { Root } from "types/users.types";

async function getUsers() {
  const data = await fetch("http://localhost:3333/users?&_page=1&_per_page=10");
  const response = data.json();

  return response;
}

export default async function Home() {
  const users: Root = await getUsers();

  return (
    <main className="mx-auto flex max-w-4xl flex-col py-12">
      <div className="flex flex-col items-center">
        {users && (
          <ul className="grid gap-4 text-lg md:grid-cols-2 lg:grid-cols-3">
            {users.data.map((user) => (
              <li key={user.id} className="border px-12 py-4 shadow-sm">
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p>
                  <strong>ID:</strong> {user.id}
                </p>
                <p>
                  <strong>Age:</strong> {user.age}
                </p>
                <p>
                  <strong>Active:</strong> {user.isActive ? "Yes" : "No"}
                </p>
                <div>
                  <strong>Hobbies:</strong>
                  <ul className="list-inside list-disc">
                    {user.hobbies.map((hobby) => (
                      <li key={hobby}>{hobby}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Address:</strong>
                  <ul>
                    <li>Street: {user.address.street}</li>
                    <li>City: {user.address.city}</li>
                    <li>Postal Code: {user.address.postalCode}</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
