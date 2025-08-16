import { useForm, Resolver } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "src/lib/common/Inputs/TextInput";
import { Form } from "src/lib/common/Containers/Form";
import { createLead, ILead } from "src/services/leads";
import { Row } from "src/lib/common/Containers/Flex";
import { Button } from "antd";

const values: ILead = {
  name: "",
  company: "",
  email: "",
  source: "",
  status: "",
  score: undefined,
  id: undefined,
};

const resolver: Resolver<typeof values> = async (data, ctx, opt) => {
  data.score = data.score ? Number(data.score) : undefined;
  const schema: Record<keyof typeof values, any> = {
    name: z.string().min(1, "Name is required"),
    company: z.string().min(1, "Company is required"),
    email: z.string().email("Invalid email format").optional(),
    source: z.string().optional(),
    status: z.string().optional(),
    score: z.number().optional(),
    id: z.string().optional(),
  };
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const LeadForm = () => {
  const formConfig = { values, resolver };
  const { register, handleSubmit, formState } = useForm(formConfig);

  const onSubmit = async (data: typeof values) => {
    console.log(data);
    createLead(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row item="start" resposive="md">
        <TextInput
          label="Name"
          name="name"
          input={register("name")}
          error={formState.errors.name?.message}
        />
        <TextInput
          label="Email"
          name="email"
          input={register("email")}
          error={formState.errors.email?.message}
        />
      </Row>
      <Row item="start" resposive="md">
        <TextInput
          label="Company"
          name="company"
          input={register("company")}
          error={formState.errors.company?.message}
        />
        <TextInput
          label="Source"
          name="source"
          input={register("source")}
          error={formState.errors.source?.message}
        />
      </Row>
      <Row item="start" resposive="md">
        <TextInput
          label="Status"
          name="status"
          input={register("status")}
          error={formState.errors.status?.message}
        />
        <TextInput
          label="Score"
          name="score"
          type="number"
          input={register("score")}
          error={formState.errors.score?.message}
        />
      </Row>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  );
};

export default LeadForm;
