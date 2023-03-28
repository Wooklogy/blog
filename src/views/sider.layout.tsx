import MenuMainComponent from "@/components/menus/Main.menu";
import { RecoilResizeState, SiderDrawState } from "@/states/state.config";
import { Drawer, Layout } from "antd";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { LAYOUT_WIDTH } from "./default.layout";

const SiderWidth = 275;

const CustomSilderLayout = () => {
  const winSizeX = useRecoilValue(RecoilResizeState);
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [drawOpen, setDrawOpen] = useRecoilState(SiderDrawState);
  const onClose = () => {
    setDrawOpen(false);
  };
  React.useEffect(() => {
    setCollapsed(winSizeX < LAYOUT_WIDTH.HDP);
  }, [winSizeX]);

  return (
    <>
      <LocalSliderLayoutStyle
        width={SiderWidth}
        collapsed={collapsed}
        collapsedWidth={0}
      ></LocalSliderLayoutStyle>
      <Drawer
        open={!collapsed || drawOpen}
        mask={collapsed}
        bodyStyle={{ padding: 0, margin: 0 }}
        closable={false}
        onClose={() => {
          if (collapsed) onClose();
        }}
        placement={"left"}
        width={SiderWidth}
      >
        <MenuMainComponent />
      </Drawer>
    </>
  );
};
export default React.memo(CustomSilderLayout);

const LocalSliderLayoutStyle = styled(Layout.Sider)`
  min-height: 100%;
  max-height: 100%;

  opacity: 0 !important;
`;
