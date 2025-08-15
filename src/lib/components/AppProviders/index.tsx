import { PropsWithChildren } from "react";

const AppProviders = (props: PropsWithChildren) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default AppProviders;
