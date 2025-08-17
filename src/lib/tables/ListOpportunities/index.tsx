import { Button } from "antd";
import { useEffect, useState } from "react";
import { PiCheck, PiPen, PiTrash, PiX } from "react-icons/pi";
import { opportunityTableCols } from "src/constants/tableItems";
import useCommon from "src/hooks/useCommon";
import { Column, Row } from "src/lib/common/Containers/Flex";
import SelectInput from "src/lib/common/Inputs/SelectInput";
import TextInput from "src/lib/common/Inputs/TextInput";
import CollapsibleTable from "src/lib/common/Tables/CollapsibleTable";
import Text, { getText } from "src/lib/common/Text/Text";
import {
  deleteOpportunity,
  IOpportunity,
  listOpportunities,
} from "src/services/opotunity";

type IOpportunityTable = {
  onEdit: (opportunity: IOpportunity) => void;
};

const OpportunityTable = (props: IOpportunityTable) => {
  const { onEdit } = props;
  const { query, queryDebounce, setQuery, ...hooks } = useCommon();
  const [stage, setStage] = useState("");
  const [opportunityList, setOpportunityList] = useState<IOpportunity[]>();

  const onDelete = async (opportunity: IOpportunity) => {
    await deleteOpportunity(opportunity);
  };

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

  const ActionButtons = (opp: IOpportunity) => (
    <>
      <Button variant="solid" color="blue" onClick={() => onEdit?.(opp)}>
        <PiPen size={20} />
        <Text path="opportunity_action_edit" />
      </Button>
      <Button variant="solid" color="red" onClick={() => onDelete(opp)}>
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
        page={hooks.page}
        pageSize={hooks.pSize}
        pageTotal={hooks.pTotal}
        data={opportunityList || []}
        columns={opportunityTableCols}
        itemButtons={ActionButtons}
      />
    </Column>
  );
};

export default OpportunityTable;
