import { Button } from "antd";
import { useEffect, useState } from "react";
import { PiCheck, PiPen, PiTrash, PiX } from "react-icons/pi";
import useCommon from "src/hooks/useCommon";
import { Column, Row } from "src/lib/common/Containers/Flex";
import SelectInput from "src/lib/common/Inputs/SelectInput";
import TextInput from "src/lib/common/Inputs/TextInput";
import CollapsibleTable from "src/lib/common/Tables/CollapsibleTable";
import Text, { getText } from "src/lib/common/Text/Text";
import { IOpportunity, listOpportunities } from "src/services/opotunity";

type IOpportunityTable = {
  onEdit: (opportunity: IOpportunity) => void;
};

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Stage", dataIndex: "stage", key: "stage" },
  { title: "Amount", dataIndex: "amount", key: "amount" },
  { title: "Account Name", dataIndex: "accountName", key: "accountName" },
];

const OpportunityTable = (props: IOpportunityTable) => {
  const { onEdit } = props;
  const { query, queryDebounce, setQuery, ...hooks } = useCommon();
  const [stage, setStage] = useState("");
  const [opportunityList, setOpportunityList] = useState<IOpportunity[]>();

  useEffect(() => {
    const filters = {
      query,
      stage,
    };
    const pagination = {
      page: hooks.page,
      pageSize: hooks.pSize,
    };
    listOpportunities(filters, pagination).then((res) => {
      const options = res.data.map((item) => ({ ...item, key: item.id }));
      setOpportunityList(options);
    });
  }, [query, stage]);

  const ActionButtons = (op: IOpportunity) => (
    <>
      <Button variant="solid" color="blue" onClick={() => onEdit?.(op)}>
        <PiPen size={20} />
        <Text path="opportunity_action_edit" />
      </Button>
      <Button variant="solid" color="green">
        <PiCheck size={20} />
        <Text path="opportunity_action_win" />
      </Button>
      <Button variant="solid" color="yellow">
        <PiX size={20} />
        <Text path="opportunity_action_lost" />
      </Button>
      <Button variant="solid" color="red">
        <PiTrash size={20} />
        <Text path="opportunity_action_delete" />
      </Button>
    </>
  );

  return (
    <Column>
      <Row item="end" resposive="md">
        <TextInput
          label="Search"
          placeholder={getText("opportunity_search_placeholder")}
          value={query}
          onChangeValue={setQuery}
        />
        <SelectInput
          label="Stage"
          options={[]}
          value={stage}
          onChange={setStage}
        />
      </Row>
      <CollapsibleTable
        columns={columns}
        page={hooks.page}
        pageSize={hooks.pSize}
        pageTotal={hooks.pTotal}
        data={opportunityList || []}
        itemButtons={ActionButtons}
      />
    </Column>
  );
};

export default OpportunityTable;
