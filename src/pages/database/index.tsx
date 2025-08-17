import Paragraph from "src/lib/common/Text/Paragraph";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";
import Page from "src/lib/components/Page";
import DataBaseForm from "src/lib/forms/DataBaseForm";

const DataBasePage = () => {
  return (
    <Page>
      <Title tag="h2" color="blue">
        <Text path="database_title" />
      </Title>
      <Paragraph>
        <Text path="database_description" />
      </Paragraph>
      <DataBaseForm />
    </Page>
  );
};

export const Component = DataBasePage;
