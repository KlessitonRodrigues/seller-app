import { ColumnsType } from "antd/es/table";
import { ILead } from "src/services/leads";

export const leadTableItems: ColumnsType<ILead> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    hidden: true,
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    hidden: true,
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    hidden: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
    render: (score) => (score ? score.toString() : "-"),
  },
];
