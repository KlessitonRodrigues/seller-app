import { Button } from "antd";
import { useEffect, useState } from "react";
import { PiCheck, PiPen, PiTrash, PiX } from "react-icons/pi";
import { LeadScoreOptions, LeadStatusOptions } from "src/constants/optionList";
import { leadTableItems } from "src/constants/tableItems";
import useCommon from "src/hooks/useCommon";
import { Column, Row } from "src/lib/common/Containers/Flex";
import SelectInput from "src/lib/common/Inputs/SelectInput";
import TextInput from "src/lib/common/Inputs/TextInput";
import CollapsibleTable from "src/lib/common/Tables/CollapsibleTable";
import Text, { getText } from "src/lib/common/Text/Text";
import {
  convertToOpportunity,
  deleteLead,
  ILead,
  listLeads,
  rejectLead,
} from "src/services/leads";

type ILeadsTableProps = {
  onEdit?: (lead: ILead) => void;
};

const LeadsTable = (props: ILeadsTableProps) => {
  const { onEdit } = props;
  const { query, queryDebounce, setQuery, ...hooks } = useCommon();
  const [leadList, setLeadList] = useState<ILead[]>();
  const [leadStatus, setLeadStatus] = useState("");
  const [leadScore, setLeadScore] = useState("");

  const onPageChange = (page: number, pageSize: number) => {
    hooks.setPage(page);
    hooks.setPSize(pageSize);
  };

  const onConvertLead = async (lead: ILead) => {
    await convertToOpportunity(lead);
  };

  const onRejectLead = async (lead: ILead) => {
    await rejectLead(lead);
  };

  const onDeleteLead = async (lead: ILead) => {
    await deleteLead(lead);
  };

  useEffect(() => {
    const leadFilters = {
      query: queryDebounce,
      status: leadStatus,
      score: leadScore,
    };
    const leadPage = {
      page: hooks.page,
      pageSize: hooks.pSize,
    };

    listLeads(leadFilters, leadPage).then((res) => {
      const leadOptions = res.data.map((lead) => ({ ...lead, key: lead.id }));
      setLeadList(leadOptions);
      hooks.setPTotal(res.total);
    });
  }, [queryDebounce, leadStatus, leadScore, hooks.page, hooks.pSize]);

  const ActionButtons = (lead: ILead) => (
    <>
      <Button variant="solid" color="blue" onClick={() => onEdit?.(lead)}>
        <PiPen size={20} />
        <Text path="lead_action_edit" />
      </Button>
      <Button variant="solid" color="green" onClick={() => onConvertLead(lead)}>
        <PiCheck size={20} />
        <Text path="lead_action_make_opportunity" />
      </Button>
      <Button variant="solid" color="yellow" onClick={() => onRejectLead(lead)}>
        <PiX size={20} />
        <Text path="lead_action_refuse" />
      </Button>
      <Button variant="solid" color="red" onClick={() => onDeleteLead(lead)}>
        <PiTrash size={20} />
        <Text path="lead_action_delete" />
      </Button>
    </>
  );

  return (
    <Column>
      <Row item="end" resposive="md">
        <TextInput
          label="Search"
          placeholder={getText("lead_search_placeholder")}
          value={query}
          onChangeValue={(value) => setQuery(value)}
        />
        <Row>
          <SelectInput
            label="Status"
            options={LeadStatusOptions}
            value={leadStatus}
            onChange={(value) => setLeadStatus(value)}
          />
          <SelectInput
            label="Score"
            options={LeadScoreOptions}
            value={leadScore}
            onChange={(value) => setLeadScore(value)}
          />
        </Row>
      </Row>
      <CollapsibleTable
        data={leadList}
        columns={leadTableItems}
        page={hooks.page}
        pageSize={hooks.pSize}
        pageTotal={hooks.pTotal}
        itemButtons={ActionButtons}
        onPageChange={onPageChange}
      />
    </Column>
  );
};

export default LeadsTable;
