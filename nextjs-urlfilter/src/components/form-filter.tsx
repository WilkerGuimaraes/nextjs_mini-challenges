"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const filterFormSchema = z.object({
  completed: z.boolean(),
});

type FilterFormSchema = z.infer<typeof filterFormSchema>;

export function FormFilter() {
  const { register, handleSubmit } = useForm<FilterFormSchema>({
    resolver: zodResolver(filterFormSchema),
  });

  function handleFilterTodos(data: FilterFormSchema) {
    console.log(data);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFilterTodos)}
        className="flex items-center gap-4 rounded border py-2"
      >
        <div className="space-x-2 p-2">
          <input
            type="radio"
            {...register("completed")}
            value={"true"}
            id="isCompleted"
          />
          <label htmlFor="isCompleted">Is completed</label>
        </div>

        <div className="space-x-2 p-2">
          <input
            type="radio"
            {...register("completed")}
            value={"false"}
            id="isInCompleted"
          />
          <label htmlFor="isInCompleted">Is incompleted</label>
        </div>

        <div className="p-2">
          <button
            type="submit"
            className="rounded bg-zinc-800 p-2 font-bold text-zinc-50 hover:bg-zinc-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
