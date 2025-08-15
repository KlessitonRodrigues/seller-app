import { Row } from "src/lib/common/Containers/Flex";
import Paragraph from "src/lib/common/Text/Paragraph";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";
import Page from "src/lib/components/Page";

const HomePage = () => {
  return (
    <Page>
      <Title tag="h1" color="blue">
        <Text path="home_title" />
      </Title>
      <Paragraph>
        <Text path="home_description" />
      </Paragraph>
      <Row item="center">
        <Title tag="h1" color="blue">
          <Text path="home_title" />
        </Title>
        <Title tag="h1" color="blue">
          <Text path="home_title" />
        </Title>
        <Title tag="h1" color="blue">
          <Text path="home_title" />
        </Title>
        <Paragraph>
          <Text path="home_description" />
        </Paragraph>
      </Row>
    </Page>
  );
};

export const Component = HomePage;
