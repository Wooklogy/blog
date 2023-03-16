import { AppTheme } from "@/styles/global.style";
import { Menu, MenuProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { CgSmileNone } from "react-icons/cg";
import { motion } from "framer-motion";
export interface CustomMenuItemProps {
  type?: "group" | "divider";
  label: string;
  icon?: React.ReactNode;
  children?: CustomMenuItemProps[];
  key: string;
}

export interface CustomMenuProps extends MenuProps {
  type?: "sider" | "index";
  customItems?: CustomMenuItemProps[];
}

function MenuSetter(item: CustomMenuItemProps) {
  switch (item.type) {
    case "group":
      return (
        <CustomMenuGroup title={item.label || ""} key={item.key || ""}>
          {item.children?.map((m_item) => MenuSetter(m_item))}
        </CustomMenuGroup>
      );
    case "divider":
      return <Menu.Divider></Menu.Divider>;
    default:
      if (item?.children) {
        return (
          <CustomSubMenu
            title={item.label}
            icon={
              <motion.div className="menu-icon">
                {item?.icon || <CgSmileNone />}
              </motion.div>
            }
            key={item.key}
          >
            {item.children?.map((m_item) => MenuSetter(m_item))}
          </CustomSubMenu>
        );
      } else {
        return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
      }
  }
}

const CustomMenu: React.FC<PropsWithChildren<CustomMenuProps>> = (props) => {
  return (
    <CustomMenuStyle
      {...props}
      items={props?.customItems ? undefined : props.items}
    >
      {props?.customItems?.map((item) => MenuSetter(item))}
    </CustomMenuStyle>
  );
};
export default CustomMenu;

const CustomMenuStyle = styled(Menu)<CustomMenuProps>``;

const CustomMenuGroup = styled(Menu.ItemGroup)`
  font-size: 14px;
  margin-top: 1rem;
  .ant-menu-item-group-title {
    ::before {
      content: "‧‧‧ ";
    }
    font-size: 0.75em;
    color: ${AppTheme.color.text_second};
  }
`;
const CustomSubMenu = styled(Menu.SubMenu)`
  font-size: 14px;
  font-weight: 500;
  &.ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: ${AppTheme.color.primary_second};
    background-color: ${AppTheme.color.primary_second_alpha};
  }
  .menu-icon {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: rgba(230, 230, 230, 0.25);
    & > svg {
      color: ${AppTheme.color.text_second};
    }
  }
`;
