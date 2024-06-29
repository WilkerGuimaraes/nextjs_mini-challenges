import { Header } from "../components/header";

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function Home() {
  async function fetchTodos() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = data.json();

    return response;
  }

  const todos: Todos[] = await fetchTodos();

  return (
    <main className="mx-auto my-12 max-w-5xl space-y-8 px-16">
      <Header />

      <div>
        {todos && (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {todos.map((todo) => (
              <li key={todo.id} className="border p-4 shadow-sm">
                <h1 className="text-lg font-bold">User: {todo.userId}</h1>
                <p>{todo.title}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
