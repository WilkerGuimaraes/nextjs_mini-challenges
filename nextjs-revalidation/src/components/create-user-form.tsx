"use client";

import { revalidateAction } from "../actions/revalidate-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
});

type UserFormSchema = z.infer<typeof userFormSchema>;

export function CreateNewUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function createUser({ name, email }: UserFormSchema) {
    //delay 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500));

    await fetch("http://localhost:3333/users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });

    revalidateAction();
    reset();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col items-center justify-center gap-8 rounded-sm p-4 md:flex-row md:items-end"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xl font-bold">
            Name:
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            className="h-10 rounded-sm border p-2 shadow-sm outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl font-bold">
            Email:
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="h-10 rounded-sm border p-2 shadow-sm outline-none"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="h-10 rounded-lg bg-zinc-800 px-4 font-bold text-zinc-50 hover:bg-zinc-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create user"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
