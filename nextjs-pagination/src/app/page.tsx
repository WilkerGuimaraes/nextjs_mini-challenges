interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = data.json();

  return response;
}

export default async function Home() {
  const posts: PostsProps[] = await getPosts();

  return (
    <main className="max-w-4xl mx-auto my-4">
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
