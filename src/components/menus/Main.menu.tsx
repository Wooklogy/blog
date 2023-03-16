import { AppTheme, createPublicPath } from "@/styles/global.style";
import { Image, Menu, MenuProps } from "antd";
import React from "react";
import styled from "styled-components";
import IconToTextAnimation from "../animation/IconToText.animation";
import CustomCol from "../grids/Col.grid";
import CustomRow from "../grids/Row.grid";
import SVGCat from "../svgs/Cat.svg";
import SVGHome from "../svgs/Home.svg";
import SVGPortfolio from "../svgs/Portfolio";
import CustomText from "../texts/Text";
import CustomMenu, { CustomMenuItemProps } from "./Menu";

const PictrueSize = 98;

const MenuMainComponent = () => {
  const items: CustomMenuItemProps[] = [
    {
      label: "Develop",
      key: "develop Titie",
      type: "group",
      children: [
        {
          label: "Some thing",
          key: "1",
          children: [
            {
              label: "장현욱",
              key: "짱짱맨",
            },
            {
              label: "현욱짱",
              key: "짱맨",
            },
          ],
        },

        {
          label: "Some thing",
          key: "2",
        },
        {
          label: "Some thing",
          key: "3",
        },
      ],
    },
    {
      label: "Dev Ops",
      key: "develop",
      type: "group",
      children: [
        {
          label: "Some thing",
          key: "1",
          children: [
            {
              label: "장현욱",
              key: "짱짱맨",
            },
            {
              label: "현욱짱",
              key: "짱맨",
            },
          ],
        },

        {
          label: "Some thing",
          key: "2",
        },
        {
          label: "Some thing",
          key: "3",
        },
      ],
    },
  ];
  return (
    <CustomRow>
      <LocalProfileSection span={24}>
        <div className="silder_profile_container">
          <div className="background-image">
            <Image
              src={createPublicPath("images/profileBack.jpg")}
              alt="profile_back_img"
              preview={false}
              loading="lazy"
            ></Image>
          </div>
          <div className="picture">
            <Image
              src={createPublicPath("images/my.png")}
              alt="profile_picture"
              preview={false}
              loading="lazy"
            ></Image>
          </div>
          <div className="namespace">
            <CustomText
              class_name="justify-center"
              weight={"medium"}
              size="16px"
            >
              Wology 🧑‍💻
            </CustomText>
            <CustomText
              class_name="justify-center margin-top-05"
              weight={"medium"}
              color={AppTheme.color.text_second}
              size="14px"
            >
              월로지
            </CustomText>
          </div>
        </div>
        <div className="slider_nav_container flex align-center justify-evenly">
          <IconToTextAnimation text="홈">
            <SVGHome className="cursor-pointer"></SVGHome>
          </IconToTextAnimation>
          <IconToTextAnimation text="프로필">
            <SVGCat className="cursor-pointer"></SVGCat>
          </IconToTextAnimation>
          <IconToTextAnimation text="포트폴리오">
            <SVGPortfolio className="cursor-pointer"></SVGPortfolio>
          </IconToTextAnimation>
        </div>
      </LocalProfileSection>
      <CustomCol span={24}>
        <CustomMenu mode="inline" customItems={items}></CustomMenu>
      </CustomCol>
    </CustomRow>
  );
};
export default React.memo(MenuMainComponent);

const LocalProfileSection = styled(CustomCol)`
  height: 320px;
  border-bottom: 0.5px solid ${AppTheme.color.divider};
  width: 100%;
  .silder_profile_container {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    .background-image {
      width: 100%;
      height: 50%;
      overflow: hidden;
    }

    .picture {
      width: ${PictrueSize}px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 12px;
      height: ${PictrueSize}px;
      position: absolute;
      overflow: hidden;
      object-fit: cover;
      background-color: ${AppTheme.color.white};
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .namespace {
      margin-top: ${PictrueSize / 2}px;
      padding: 1em;
    }
  }
  .slider_nav_container {
    position: relative;
    margin: 0 auto;
    margin-top: 3em;
    width: 80%;
    height: 48px;
    border-radius: 35px;
    box-shadow: ${AppTheme.box.shadow};
  }
`;
