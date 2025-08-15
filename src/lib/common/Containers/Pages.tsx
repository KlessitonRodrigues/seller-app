import { twMerge } from "tailwind-merge";

type IPage = React.HTMLAttributes<HTMLDivElement> & {};

export const DefaultPage = (props: IPage) => {
  return (
    <div
      {...props}
      className={twMerge(
        `bg-gray-50 text-white min-w-screen min-h-screen ${props.className}`
      )}
    />
  );
};

export const PageContent = (props: IPage) => {
  return <div {...props} className={twMerge(`p-4 ${props.className}`)} />;
};
