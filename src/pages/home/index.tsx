import Page from "src/lib/components/Page";
import SallesSection from "./_content/SellesSection";
import { Column } from "src/lib/common/Containers/Flex";

const HomePage = () => {
  return (
    <Page>
      <Column>
        <SallesSection />
      </Column>
    </Page>
  );
};

export const Component = HomePage;
