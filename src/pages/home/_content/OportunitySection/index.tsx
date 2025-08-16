import { Tabs } from "antd";
import { useState } from "react";
import { PiStorefront } from "react-icons/pi";
import { leadMenuItems } from "src/constants/menuItems";
import { Card } from "src/lib/common/Cards/Card";
import If from "src/lib/common/Containers/Conditional";
import Paragraph from "src/lib/common/Text/Paragraph";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";
import LeadForm from "src/lib/forms/CreateLead";
import LeadsTable from "src/lib/tables/ListLeads";

const OpportunitySection = () => {
  const [menuItem, setMenuItem] = useState("1");
  return (
    <Card>
      <Title flex tag="h3" opacity="80">
        <PiStorefront size={26} className="text-gray-500" />
        <Text path="sale_section_title" />
      </Title>
      <Paragraph opacity="70">
        <Text path="sale_section_description" />
      </Paragraph>
      <Tabs activeKey={menuItem} items={leadMenuItems} onChange={setMenuItem} />
      <If check={menuItem === "1"}>
        <LeadsTable />
      </If>
      <If check={menuItem === "2"}>
        <LeadForm />
      </If>
    </Card>
  );
};

export default OpportunitySection;
