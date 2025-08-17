import { Menu, MenuProps } from "antd";
import { Row } from "src/lib/common/Containers/Flex";

import { useLocation } from "react-router-dom";
import { setLanguage } from "src/services/language";
import { navigationMenuItems } from "src/constants/menuItems";

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
        mode="horizontal"
        onClick={onClick}
        selectedKeys={[location.pathname]}
        items={navigationMenuItems}
        style={{ fontSize: "1.05rem", padding: "0.5rem 1rem" }}
      />
    </Row>
  );
};

export default Header;
