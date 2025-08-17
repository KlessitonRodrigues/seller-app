import { PiHandCoins, PiList, PiPlus, PiUserList } from "react-icons/pi";
import Title from "src/lib/common/Text/Title";

import { PiDatabase, PiGlobe, PiUser } from "react-icons/pi";
import { Link } from "react-router-dom";
import { getLanguage } from "src/services/language";
import Text from "src/lib/common/Text/Text";
import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const navigationMenuItems: MenuItem[] = [
  {
    label: (
      <Link to="/">
        <Text path="header_menu_leads" />
      </Link>
    ),
    key: "/",
    icon: <PiUserList size={20} />,
  },
  {
    label: (
      <Link to="/opportunities">
        <Text path="header_menu_opportunities" />
      </Link>
    ),
    key: "/opportunities",
    icon: <PiHandCoins size={20} />,
  },
  {
    label: (
      <Link to="/database">
        <Text path="header_menu_database" />
      </Link>
    ),
    key: "/database",
    icon: <PiDatabase size={20} />,
  },
  {
    label: (
      <Link to="/about">
        <Text path="header_menu_about" />
      </Link>
    ),
    key: "/about",
    icon: <PiUser size={20} />,
  },
  {
    label: getLanguage()?.toUpperCase(),
    key: "language",
    icon: <PiGlobe size={20} />,
    style: { marginLeft: "auto" },
    children: [
      {
        label: "English",
        key: "en",
      },
      {
        label: "Português",
        key: "pt",
      },
    ],
  },
];

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

export const opportunityMenuItems = [
  {
    label: (
      <Title flex tag="h6" font="normal">
        <PiList size={18} />
        <Text path="opportunity_tab_list" />
      </Title>
    ),
    key: "1",
  },
  {
    label: (
      <Title flex tag="h6" font="normal">
        <PiPlus size={18} />
        <Text path="opportunity_tab_add_item" />
      </Title>
    ),
    key: "2",
  },
];
