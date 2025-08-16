import { Button } from "antd";
import { useEffect, useState } from "react";
import { PiHandCoins, PiMagnifyingGlass, PiPen } from "react-icons/pi";
import { leadTableItems } from "src/constants/tableItems";
import { Column, Row } from "src/lib/common/Containers/Flex";
import SelectInput from "src/lib/common/Inputs/SelectInput";
import TextInput from "src/lib/common/Inputs/TextInput";
import CollapsibleTable from "src/lib/common/Tables/CollapsibleTable";
import { ILead, listLeads } from "src/services/leads";

const LeadsTable = () => {
  const [leadList, setLeadList] = useState<ILead[]>();

  useEffect(() => {
    listLeads().then((leads) => {
      const leadOptions = leads.map((lead) => ({ ...lead, key: lead.id }));
      setLeadList(leadOptions);
    });
  }, []);

  const onPageChange = (page: number, pageSize: number) => {
    console.log("Page changed:", page, pageSize);
    // Implement pagination logic here if needed
  };

  const ActionButtons = (item: ILead) => (
    <>
      <Button variant="outlined">
        <PiPen size={18} />
        Edit
      </Button>
      <Button variant="outlined">
        <PiHandCoins size={18} />
        Opportunity
      </Button>
    </>
  );

  return (
    <Column>
      <Row item="center">
        <TextInput icon={<PiMagnifyingGlass size={22} />} />
        <Row>
          <SelectInput
            options={[
              { label: "All", key: "all" },
              { label: "Open", key: "open" },
              { label: "Closed", key: "closed" },
            ]}
          />
          <SelectInput
            options={[
              { label: "All", key: "all" },
              { label: "Open", key: "open" },
              { label: "Closed", key: "closed" },
            ]}
          />
        </Row>
      </Row>
      <CollapsibleTable
        data={leadList}
        columns={leadTableItems}
        pageSize={10}
        page={1}
        itemButtons={ActionButtons}
        onPageChange={onPageChange}
      />
    </Column>
  );
};

export default LeadsTable;
