import { twMerge } from "tailwind-merge";

export const Form = (props: React.HTMLAttributes<HTMLFormElement>) => {
  return (
    <form
      {...props}
      className={twMerge(
        `w-full max-w-[720px] flex flex-col items-start gap-2 ${props.className}`
      )}
    />
  );
};
