import { PiList, PiPlus } from "react-icons/pi";
import Title from "src/lib/common/Text/Title";

export const leadMenuItems = [
  {
    label: (
      <Title flex tag="h6" font="normal">
        <PiList size={18} />
        All Leads
      </Title>
    ),
    key: "1",
  },
  {
    label: (
      <Title flex tag="h6" font="normal">
        <PiPlus size={18} />
        New Lead
      </Title>
    ),
    key: "2",
  },
];
