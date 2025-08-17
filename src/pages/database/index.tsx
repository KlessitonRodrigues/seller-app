import { PiDatabase } from "react-icons/pi";
import { Card } from "src/lib/common/Cards/Card";
import Paragraph from "src/lib/common/Text/Paragraph";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";
import Page from "src/lib/components/Page";
import DataBaseForm from "src/lib/forms/DataBaseForm";

const DataBasePage = () => {
  return (
    <Page>
      <Card>
        <Title flex tag="h3" opacity="80">
          <PiDatabase size={26} className="text-gray-500" />
          <Text path="database_title" />
        </Title>
        <Paragraph opacity="70">
          <Text path="database_description" />
        </Paragraph>
        <DataBaseForm />
      </Card>
    </Page>
  );
};

export const Component = DataBasePage;
