import { Menu, MenuProps } from "antd";
import { Row } from "src/lib/common/Containers/Flex";

import { PiDatabase, PiGlobe, PiHouse, PiUser } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { getLanguage, setLanguage } from "src/services/language";
import Text from "src/lib/common/Text/Text";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: (
      <Link to="/">
        <Text path="header_menu_home" />
      </Link>
    ),
    key: "/",
    icon: <PiHouse size={20} />,
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

const Header = () => {
  const location = useLocation();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "en") setLanguage("en");
    else if (key === "pt") setLanguage("pt");
  };

  return (
    <Row justify="between" className="bg-white">
      <Menu
        className="w-full"
        style={{ fontSize: "1.05rem", padding: "0.5rem 1rem" }}
        mode="horizontal"
        onClick={onClick}
        selectedKeys={[location.pathname]}
        items={items}
      />
    </Row>
  );
};

export default Header;
