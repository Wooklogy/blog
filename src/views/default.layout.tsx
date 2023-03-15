/* eslint-disable react-hooks/exhaustive-deps */
import { RecoilResizeState, RecoilScrollState } from "@/states/state.config";
import { Layout } from "antd";
import React, { PropsWithChildren } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CustomSilderLayout from "./sider.layout";
const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [, setResize] = useRecoilState(RecoilResizeState);
  const [, setScrollY] = useRecoilState(RecoilScrollState);

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  const handleScroll = () => {
    setScrollY(document.body.scrollTop);
  };

  const benDevModeF12 = (e: globalThis.KeyboardEvent) => {
    if (e.key == "F12") {
      e.preventDefault();
    }
  };

  const benDevModeMouseRight = (e: globalThis.MouseEvent) => {
    if (e.button == 2) {
      e.preventDefault();
      return false;
    }
  };

  React.useEffect(() => {
    setResize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    document.body.addEventListener("scroll", handleScroll);

    if (process.env.NODE_ENV === "production") {
      window.addEventListener("contextmenu", benDevModeMouseRight);
      window.addEventListener("keydown", benDevModeF12);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeEventListener("scroll", handleScroll);

      if (process.env.NODE_ENV === "production") {
        window.removeEventListener("keydown", benDevModeF12);
        window.removeEventListener("contextmenu", benDevModeMouseRight);
      }
    };
  }, []);
  return (
    <LocalMainLayout>
      <CustomSilderLayout></CustomSilderLayout>
      <Layout>
        <LocalHeaderLayout></LocalHeaderLayout>
        <LocalContentLayout>{children}</LocalContentLayout>
      </Layout>
    </LocalMainLayout>
  );
};
export default DefaultLayout;

const LocalMainLayout = styled(Layout)`
  min-height: 100vh;
`;
const LocalHeaderLayout = styled(Layout.Header)``;
const LocalContentLayout = styled(Layout.Content)``;

export const LAYOUT_WIDTH = {
  QHD: 2560,
  FHD: 1920,
  HDP: 1440,
  HD: 1280,
  NOT: 1024,
  TABLET: 768,
  MOBILE: 425,
};
