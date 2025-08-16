import React, { useState } from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { PiCaretDown, PiCaretRight } from "react-icons/pi";

type ICollapsibleTableProps = {
  data?: any[];
  loading?: boolean;
  columns?: ColumnsType<any>;
  pageSize?: number;
  page?: number;
  onPageChange?: (page: number, pageSize: number) => void;
  itemButtons?: (item: any) => React.ReactNode;
};

const CollapsibleTable = (props: ICollapsibleTableProps) => {
  const { data, columns, loading, page, pageSize, onPageChange, itemButtons } =
    props;
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  return (
    <Table<any>
      bordered
      size="small"
      className="w-full"
      loading={loading}
      dataSource={data}
      columns={[
        ...(columns || []),
        {
          title: "Actions",
          key: "actions",
          align: "center",
          width: 200,
          render: (_, record) => (
            <div className="flex justify-end gap-2">
              {itemButtons ? itemButtons(record) : null}
            </div>
          ),
          hidden: !itemButtons,
        },
      ]}
      pagination={{ pageSize, current: page, onChange: onPageChange }}
      expandable={{
        expandedRowRender: (record) => {
          return (
            <div>
              <div className="divide-y">
                {columns?.map((col: any) => (
                  <div
                    className="flex gap-1 border-gray-300 py-2"
                    key={col.key}
                  >
                    <span className="opacity-50">{String(col.title)}:</span>
                    <span>{record[col.dataIndex]}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        },
        expandedRowKeys,
        onExpand: (expanded, record) => {
          setExpandedRowKeys(expanded ? [record.key] : []);
        },
        expandIcon: ({ expanded, onExpand, record }) => (
          <Button type="link" onClick={(e) => onExpand(record, e)}>
            {expanded ? <PiCaretDown size={18} /> : <PiCaretRight size={18} />}
          </Button>
        ),
      }}
      rowKey="key"
    />
  );
};

export default CollapsibleTable;
