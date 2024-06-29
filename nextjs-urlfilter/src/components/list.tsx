import { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface UnorderedListProps extends ComponentProps<"ul"> {}

export function UnorderedList(props: UnorderedListProps) {
  return <ul {...props} className="grid grid-cols-1 gap-4 md:grid-cols-2" />;
}

const list = tv({
  base: "border p-4 shadow-sm",
  variants: {
    backgroundColor: {
      completed: "bg-green-200",
      incompleted: "bg-red-200",
    },
  },
});

interface ListProps extends ComponentProps<"li">, VariantProps<typeof list> {}

export function List({ className, backgroundColor, ...props }: ListProps) {
  return <li {...props} className={list({ backgroundColor, className })} />;
}
