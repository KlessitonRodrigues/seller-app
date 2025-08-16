import Paragraph from "src/lib/common/Text/Paragraph";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";
import Page from "src/lib/components/Page";

const DataBasePage = () => {
  return (
    <Page>
      <Title tag="h2" color="blue">
        <Text path="database_title" />
      </Title>
      <Paragraph>
        <Text path="database_description" />
      </Paragraph>
    </Page>
  );
};

export const Component = DataBasePage;
