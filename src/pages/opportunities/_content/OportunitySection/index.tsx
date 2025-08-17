import { Tabs } from "antd";
import { useState } from "react";
import { PiStorefront } from "react-icons/pi";
import { opportunityMenuItems } from "src/constants/menuItems";
import { Card } from "src/lib/common/Cards/Card";
import If from "src/lib/common/Containers/Conditional";
import { CenteredModal } from "src/lib/common/Modal/Modal";
import Paragraph from "src/lib/common/Text/Paragraph";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";
import OpportunityForm from "src/lib/forms/CreateOpportunity";
import OpportunityTable from "src/lib/tables/ListOpportunities";
import { IOpportunity } from "src/services/opotunity";

const OpportunitySection = () => {
  const [editOpp, setEditOpp] = useState<IOpportunity>();
  const [menuItem, setMenuItem] = useState("1");

  return (
    <Card>
      <Title flex tag="h3" opacity="80">
        <PiStorefront size={26} className="text-gray-500" />
        <span>{Text({ path: "opportunity_section_title" })}</span>
      </Title>
      <Paragraph opacity="70">
        {Text({ path: "opportunity_section_description" })}
      </Paragraph>
      <Tabs
        activeKey={menuItem}
        items={opportunityMenuItems}
        onChange={setMenuItem}
        style={{ marginBottom: "-0.4rem" }}
      />
      <If check={menuItem === "1"}>
        <OpportunityTable onEdit={(opp) => setEditOpp(opp)} />
      </If>
      <If check={menuItem === "2"}>
        <OpportunityForm />
      </If>
      <If check={!!editOpp}>
        <CenteredModal
          open
          title="Edit Opportunity"
          onCancel={() => setEditOpp(undefined)}
        >
          <OpportunityForm />
        </CenteredModal>
      </If>
    </Card>
  );
};

export default OpportunitySection;
