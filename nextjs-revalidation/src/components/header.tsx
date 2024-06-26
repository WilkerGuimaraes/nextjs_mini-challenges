import { revalidateAll } from "../actions/revalidate-actions";

export function Header() {
  return (
    <header className="px-4 text-center md:text-start">
      <h1 className="text-4xl font-bold">Revalidating Data</h1>
      <p>revalidatePath vs revalidateTag</p>

      <form action={revalidateAll} className="my-8">
        <button
          type="submit"
          className="h-10 rounded-lg bg-zinc-800 px-4 font-bold text-zinc-50 hover:bg-zinc-700"
        >
          Revalidate the entire path
        </button>
      </form>
    </header>
  );
}
