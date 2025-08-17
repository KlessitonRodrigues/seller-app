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
    responsive: ["md"],
    hidden: true,
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    responsive: ["md"],
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
    responsive: ["md"],
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
    responsive: ["md"],
    render: (score) => (score ? score.toString() : "-"),
  },
];
