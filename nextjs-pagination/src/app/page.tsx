import { Header } from "components/header";
import { Pagination } from "components/pagination";

interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(page: number = 1) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`
  );
  const response = data.json();

  return response;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const posts: PostsProps[] = await getPosts(page);

  return (
    <main className="max-w-4xl mx-auto my-16 space-y-12 px-8 lg:px-0">
      <div className="flex justify-between items-center">
        <Header />
        <Pagination />
      </div>

      <div>
        {posts && (
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.id} className="border shadow-sm p-4">
                <h1 className="text-xl font-bold">{post.title}</h1>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
