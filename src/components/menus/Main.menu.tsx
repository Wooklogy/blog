import React from "react";
import styled from "styled-components";
import CustomCol from "../grids/Col.grid";
import CustomRow from "../grids/Row.grid";
import SVGProfileBorder from "../svgs/ProfileBorder.svg";

const MenuMainComponent = () => {
  return (
    <CustomRow>
      <LocalProfileSection span={24}>
        <SVGProfileBorder></SVGProfileBorder>
      </LocalProfileSection>
      <CustomCol span={24}></CustomCol>
    </CustomRow>
  );
};
export default React.memo(MenuMainComponent);

const LocalProfileSection = styled(CustomCol)`
  height: 325px;
  border-bottom: 0.5px solid lightgray;
`;
