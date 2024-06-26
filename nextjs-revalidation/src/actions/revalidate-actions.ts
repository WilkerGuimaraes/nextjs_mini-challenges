"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateAction() {
  //delay 1.5s
  await new Promise((resolve) => setTimeout(resolve, 1500));

  revalidateTag("get-users");
}

export async function revalidateAll() {
  revalidatePath("/");
}
