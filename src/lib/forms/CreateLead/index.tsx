import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "src/lib/common/Inputs/TextInput";
import { Form } from "src/lib/common/Containers/Form";
import { createLead, ILead, updateLead } from "src/services/leads";
import { Row } from "src/lib/common/Containers/Flex";
import { Button } from "antd";
import SelectInput from "src/lib/common/Inputs/SelectInput";
import { LeadStatusOptions } from "src/constants/optionList";

type ILeadFormProps = {
  data?: ILead;
};

const initial: ILead = {
  name: "",
  company: "",
  email: "",
  source: "",
  status: "",
  score: undefined,
  id: undefined,
};

const resolver: Resolver<typeof initial> = async (data, ctx, opt) => {
  data.score = data.score ? Number(data.score) : undefined;

  const schema: Record<keyof typeof initial, any> = {
    name: z.string().min(1, "Name is required"),
    company: z.string().min(1, "Company is required"),
    email: z.string().email("Invalid email format").optional(),
    source: z.string().optional(),
    status: z.string().optional(),
    score: z.number().optional(),
    id: z.string().optional(),
  };
  // @ts-expect-error
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const LeadForm = (props: ILeadFormProps) => {
  const { data } = props;
  const defaultValues = data ? { ...initial, ...data } : initial;
  const formConfig = { defaultValues, resolver };
  const { register, handleSubmit, formState, ...form } = useForm(formConfig);

  const onSubmit = async (data: typeof initial) => {
    if (data.id) return updateLead(data);
    return createLead(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row item="start" resposive="md">
        <TextInput
          label="Name"
          name="name"
          input={register("name")}
          error={formState.errors.name?.message}
          placeholder="Enter full name"
        />
        <TextInput
          label="Email"
          name="email"
          input={register("email")}
          error={formState.errors.email?.message}
          placeholder="Enter email address"
        />
      </Row>
      <Row item="start" resposive="md">
        <TextInput
          label="Company"
          name="company"
          input={register("company")}
          error={formState.errors.company?.message}
          placeholder="Enter company name"
        />
        <TextInput
          label="Source"
          name="source"
          input={register("source")}
          error={formState.errors.source?.message}
          placeholder="Lead source (e.g. website, referral)"
        />
      </Row>
      <Row item="start" resposive="md">
        <SelectInput
          label="Status"
          value={form.watch("status")}
          options={LeadStatusOptions}
          onChange={(value) => form.setValue("status", value)}
          error={formState.errors.status?.message}
        />
        <TextInput
          label="Score"
          name="score"
          type="number"
          input={register("score")}
          error={formState.errors.score?.message}
          placeholder="Score (optional)"
        />
      </Row>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  );
};

export default LeadForm;
