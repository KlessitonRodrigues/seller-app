import { Tabs } from "antd";
import { useState } from "react";
import { PiStorefront } from "react-icons/pi";
import { leadMenuItems } from "src/constants/menuItems";
import { Card } from "src/lib/common/Cards/Card";
import If from "src/lib/common/Containers/Conditional";
import { TabContainer } from "src/lib/common/Containers/Tab";
import { CenteredModal } from "src/lib/common/Modal/Modal";
import Paragraph from "src/lib/common/Text/Paragraph";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";
import LeadForm from "src/lib/forms/CreateLead";
import LeadsTable from "src/lib/tables/ListLeads";
import { ILead } from "src/services/leads";

const LeadsSection = () => {
  const [editLead, setEditLead] = useState<ILead>();
  const [menuItem, setMenuItem] = useState("1");

  return (
    <Card>
      <Title flex tag="h3" opacity="80">
        <PiStorefront size={26} className="text-gray-500" />
        <Text path="lead_section_title" />
      </Title>
      <Paragraph opacity="70">
        <Text path="lead_section_description" />
      </Paragraph>

      <TabContainer>
        <Tabs
          items={leadMenuItems}
          activeKey={menuItem}
          onChange={setMenuItem}
          style={{ marginBottom: "-0.4rem" }}
        />
        <If check={menuItem === "1"}>
          <LeadsTable onEdit={setEditLead} />
        </If>
        <If check={menuItem === "2"}>
          <LeadForm />
        </If>
        <If check={!!editLead}>
          <CenteredModal
            open
            title="Edit Lead"
            onCancel={() => setEditLead(undefined)}
          >
            <LeadForm data={editLead} />
          </CenteredModal>
        </If>
      </TabContainer>
    </Card>
  );
};

export default LeadsSection;
