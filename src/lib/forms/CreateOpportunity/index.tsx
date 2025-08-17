import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "src/lib/common/Inputs/TextInput";
import { Form } from "src/lib/common/Containers/Form";
import { Row } from "src/lib/common/Containers/Flex";
import { Button } from "antd";
import {
  createOpportunity,
  IOpportunity,
  updateOpportunity,
} from "src/services/opotunity";
import SelectInput from "src/lib/common/Inputs/SelectInput";
import { saveAlert } from "src/services/common/toast";

type IOpportunityForm = {
  data?: IOpportunity;
};

const initial: IOpportunity = {
  name: "",
  stage: "",
  amount: undefined,
  accountName: "",
  id: undefined,
};

const resolver: Resolver<typeof initial> = async (data, ctx, opt) => {
  data.amount = data.amount ? Number(data.amount) : undefined;

  const schema: Record<keyof typeof initial, any> = {
    name: z.string().min(1, "Name is required"),
    stage: z.string().optional(),
    amount: z.number().optional(),
    accountName: z.string().optional(),
    id: z.string().optional(),
  };
  // @ts-expect-error
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const OpportunityForm = (props: IOpportunityForm) => {
  const { data } = props;
  const defaultValues = data ? { ...initial, ...data } : initial;
  const formConfig = { defaultValues, resolver };
  const { register, handleSubmit, formState, ...form } = useForm(formConfig);

  const onSubmit = async (data: typeof initial) => {
    if (data.id) await saveAlert(updateOpportunity(data));
    else await saveAlert(createOpportunity(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row item="start" resposive="md">
        <TextInput
          label="Name"
          name="name"
          input={register("name")}
          error={formState.errors.name?.message}
          placeholder="Enter opportunity name"
        />
        <TextInput
          label="Account Name"
          name="accountName"
          input={register("accountName")}
          error={formState.errors.accountName?.message}
          placeholder="Enter account name"
        />
      </Row>
      <Row item="start" resposive="md">
        <SelectInput
          label="Stage"
          value={form.watch("stage")}
          onChange={(val) => form.setValue("stage", val)}
          options={[
            { label: "Prospecting", key: "Prospecting" },
            { label: "Qualification", key: "Qualification" },
            { label: "Proposal", key: "Proposal" },
            { label: "Negotiation", key: "Negotiation" },
            { label: "Closed Won", key: "Closed Won" },
            { label: "Closed Lost", key: "Closed Lost" },
          ]}
        />
        <TextInput
          label="Amount"
          name="amount"
          input={register("amount")}
          error={formState.errors.amount?.message}
          placeholder="Amount (number)"
        />
      </Row>
      <Button htmlType="submit" type="primary">
        Create Opportunity
      </Button>
    </Form>
  );
};

export default OpportunityForm;
