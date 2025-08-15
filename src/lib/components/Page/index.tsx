import { PropsWithChildren, useEffect } from "react";
import { DefaultPage, PageContent } from "src/lib/common/Containers/Pages";

const Page = (props: PropsWithChildren) => {
  const { children } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DefaultPage>
      <PageContent>{children}</PageContent>
    </DefaultPage>
  );
};

export default Page;
