import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "src/lib/common/Containers/Form";
import { Button } from "antd";
import { ILead, saveLeads } from "src/services/leads";
import FileInput from "src/lib/common/Inputs/FileInput";

type DataBase = {
  leads: ILead[];
};

const initial: DataBase = {
  leads: [],
};

const resolver: Resolver<typeof initial> = async (data, ctx, opt) => {
  const schema: Record<keyof typeof initial, any> = {
    leads: z.array(
      z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        company: z.string().optional(),
        email: z.string().optional(),
        source: z.string().optional(),
        score: z.number().optional(),
        status: z.string().optional(),
      })
    ),
  };
  return zodResolver(z.object(schema))(data, ctx, opt);
};

const DataBaseForm = () => {
  const formConfig = { initial, resolver };
  const { register, handleSubmit, formState, ...form } = useForm(formConfig);

  const onSubmit = async (data: typeof initial) => {
    console.log("Data uploaded:", data);

    await saveLeads(data.leads);
  };
  console.log(formState.errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FileInput
        label="Upload Leads File"
        accept=".json"
        onChangeValue={async (file) => {
          try {
            const data = await file.arrayBuffer();
            const fileData = new TextDecoder().decode(data);
            const leads = JSON.parse(fileData) as ILead[];
            form.setValue("leads", leads);
          } catch (e) {
            console.error(e);
          }
        }}
        error={formState.errors.leads?.message}
      />
      <Button htmlType="submit" type="primary">
        Upload data
      </Button>
    </Form>
  );
};

export default DataBaseForm;
