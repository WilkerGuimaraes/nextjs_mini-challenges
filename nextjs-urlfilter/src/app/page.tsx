import { List, UnorderedList } from "../components/list";
import { Header } from "../components/header";
import { FormFilter } from "../components/form-filter";

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

      <FormFilter />

      <div>
        {todos && (
          <UnorderedList>
            {todos.map((todo) => (
              <List
                key={todo.id}
                backgroundColor={todo.completed ? "completed" : "incompleted"}
              >
                <h1 className="text-lg font-bold">User: {todo.userId}</h1>
                <p>{todo.title}</p>
              </List>
            ))}
          </UnorderedList>
        )}
      </div>
    </main>
  );
}
