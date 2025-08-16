import Page from "src/lib/components/Page";
import LeadsSection from "./_content/LeadsSection";
import { Column } from "src/lib/common/Containers/Flex";

const HomePage = () => {
  return (
    <Page>
      <Column>
        <LeadsSection />
      </Column>
    </Page>
  );
};

export const Component = HomePage;
