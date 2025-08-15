import { twMerge } from "tailwind-merge";

type IFlex = React.HTMLAttributes<HTMLDivElement> & {
  item?: "center" | "start" | "end" | "between";
  justify?: "center" | "start" | "end" | "between";
  resposive?: "sm" | "md" | "lg" | "xl";
  gap?: number;
};

export const Row = (props: IFlex) => {
  const {
    className,
    gap = 2,
    item = "center",
    justify = "start",
    resposive,
  } = props;

  return (
    <div
      {...props}
      className={twMerge(
        `w-full flex flex-col gap-${gap} items-${item} justify-${justify}
          ${resposive ? `${resposive}:flex-row` : "flex-row"} ${className}`
      )}
    />
  );
};

export const Column = (props: IFlex) => {
  const { className, gap = 2, item = "center", justify = "start" } = props;

  return (
    <div
      {...props}
      className={twMerge(
        `w-full h-full flex flex-col gap-${gap} items-${item} justify-${justify} ${className}`
      )}
    />
  );
};

/*  tailwind include
    flex flex-row flex-col
    items-center items-start items-end items-between
    justify-center justify-start justify-end justify-between
    sm:flex-row md:flex-row lg:flex-row xl:flex-row
    gap-2 gap-4 gap-6
    w-full h-full
*/
