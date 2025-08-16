import { PiList, PiPlus } from "react-icons/pi";
import Text from "src/lib/common/Text/Text";
import Title from "src/lib/common/Text/Title";

export const leadMenuItems = [
  {
    label: (
      <Title flex tag="h6" font="normal">
        <PiList size={18} />
        <Text path="lead_menu_all_item" />
      </Title>
    ),
    key: "1",
  },
  {
    label: (
      <Title flex tag="h6" font="normal">
        <PiPlus size={18} />
        <Text path="lead_menu_add_item" />
      </Title>
    ),
    key: "2",
  },
];
