import { twMerge, type ClassNameValue } from "tailwind-merge";

const cn = (...classLists: ClassNameValue[]) => twMerge(...classLists);

export { cn, cn as clsx };
