import { PropsWithChildren, useEffect } from "react";
import {
  DefaultPage,
  PageContent,
  PageHeader,
} from "src/lib/common/Containers/Pages";
import Header from "../Header";

const Page = (props: PropsWithChildren) => {
  const { children } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DefaultPage>
      <PageHeader>
        <Header />
      </PageHeader>
      <PageContent>{children}</PageContent>
    </DefaultPage>
  );
};

export default Page;
