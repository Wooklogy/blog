import MenuMainComponent from "@/components/menus/Main.menu";
import { RecoilResizeState } from "@/states/state.config";
import { Drawer, Layout } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { LAYOUT_WIDTH } from "./default.layout";

const SiderWidth = 200;

const CustomSilderLayout = () => {
  const winSizeX = useRecoilValue(RecoilResizeState);
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [drawOpen, setDrawOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    setCollapsed(winSizeX < LAYOUT_WIDTH.HDP);
  }, [winSizeX]);

  return (
    <>
      <LocalSliderLayoutStyle
        width={SiderWidth}
        collapsed={collapsed}
        collapsedWidth={0}
      >
        <MenuMainComponent />
      </LocalSliderLayoutStyle>
      <Drawer
        open={drawOpen}
        closable={false}
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
  background-color: white !important;
  box-shadow: -5px 0px 8px rgba(12, 12, 12, 0.5);
`;
