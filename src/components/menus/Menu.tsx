import { AppTheme } from "@/styles/global.style";
import { Menu, MenuItemProps, MenuProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface CustomMenuItemProps {
  type?: "group" | "divider";
  label: string;
  icon?: React.ReactNode;
  children?: CustomMenuItemProps[];
  key: string;
}

export interface CustomMenuProps extends MenuProps {
  type?: "sider" | "index";
  custom_items?: CustomMenuItemProps[];
}

const CustomMenu: React.FC<PropsWithChildren<CustomMenuProps>> = (props) => {
  return (
    <CustomMenuStyle
      {...props}
      items={props?.custom_items?.map((item, idx) => {
        return {
          type: item.type,
          key: item.key + `${idx}`,
          icon: item.icon,
          label: item.label,
          children: item.children,
        };
      })}
    ></CustomMenuStyle>
  );
};
export default CustomMenu;

const CustomMenuStyle = styled(Menu)<CustomMenuProps>`
  /* group */
  .ant-menu-item-group {
    font-size: 14px;
    margin-top: 1rem;
    .ant-menu-item-group-title {
      ::before {
        content: "‧‧‧ ";
      }
      font-size: 0.75em;
      color: ${AppTheme.color.text_second};
    }
  }
  /* sub-menu */
  .ant-menu-submenu {
    font-size: 14px;
    font-weight: 500;

    /* 선택된 상태 */
    &.ant-menu-submenu-selected > .ant-menu-submenu-title {
      color: ${AppTheme.color.primary_second};
      background-color: ${AppTheme.color.primary_second_alpha};
      svg {
        color: ${AppTheme.color.primary_second};
      }
    }
    .ant-menu-submenu-title:hover {
      ::after {
        content: "";
        position: absolute;
        bottom: 1px;
        left: -100%;
        height: 1px;
        width: 100%;
        background-color: ${AppTheme.color.primary_second};
        animation: move 0.5s ease-in-out forwards;
      }
      .ant-menu-title-content {
        color: ${AppTheme.color.primary_second};
      }
      .ant-menu-submenu-arrow {
        color: ${AppTheme.color.primary_second};
      }

      background-color: ${AppTheme.color.primary_second_alpha};
      svg {
        color: ${AppTheme.color.primary_second};
      }
    }

    .menu-icon {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: rgba(230, 230, 230, 0.25);
    }
  }
  /* 선택한 상태에서 호버시 */
  .ant-menu-submenu.ant-menu-submenu-active {
    &.ant-menu-submenu-selected > .ant-menu-submenu-title {
      color: ${AppTheme.color.primary_second_alpha};
      background-color: ${AppTheme.color.primary_second_alpha};
      svg {
        color: ${AppTheme.color.primary_second};
      }
    }
  }

  /* child-menu */
  .ant-menu-item {
    padding-left: 28px !important;
    ::before {
      content: "▹";
    }
    &:hover {
      color: ${AppTheme.color.primary_second};

      background-color: ${AppTheme.color.primary_second_alpha};
    }
    &.ant-menu-item-active {
      color: ${AppTheme.color.primary_second};

      background-color: ${AppTheme.color.primary_second_alpha} !important;
    }
    &.ant-menu-item-selected {
      color: ${AppTheme.color.primary_second};
      background-color: ${AppTheme.color.primary_second_alpha};
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    &:hover {
      overflow: hidden;
    }
    ::after {
      content: "";
    }
  }

  /* svg animation */
  *[role="menuitem"] {
    &:hover svg {
      color: ${AppTheme.color.primary_second};

      animation: rotate 500ms 1 ease-in-out forwards;
    }
    &:hover .ant-menu-title-content {
      color: ${AppTheme.color.primary_second};
    }
    &:hover::before {
      color: ${AppTheme.color.primary_second};
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    15% {
      transform: rotate(35deg) scale(1.1);
    }
    30% {
      transform: rotate(-15deg) scale(1.1);
    }
    45% {
      transform: rotate(-35deg) scale(1.1);
    }
    60% {
      transform: rotate(-15deg) scale(1.1);
    }
    75% {
      transform: rotate(35deg) scale(1.1);
    }
    90% {
      transform: rotate(-15deg) scale(1.1);
    }
    100% {
      transform: rotate(0);
    }
  }
  @keyframes move {
    to {
      left: 100%;
    }
  }
`;
