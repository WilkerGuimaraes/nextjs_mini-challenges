"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  });

  function handleSearchForm(data: SearchFormInputs) {
    onSearch(data.query);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearchForm)} className="flex gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="query" className="text-xl">
            Hobbies filter:
          </label>
          <input
            type="text"
            {...register("query")}
            id="query"
            className="rounded-lg bg-zinc-100 p-4 text-lg outline-none"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-5 text-zinc-50 hover:bg-zinc-700"
            disabled={isSubmitting}
          >
            <Search />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
