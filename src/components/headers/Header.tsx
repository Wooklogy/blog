import CustomCol from "../grids/Col.grid";
import CustomRow from "../grids/Row.grid";
import { motion } from "framer-motion";

import styled from "styled-components";
import { AppTheme, ResoulutionReturner } from "@/styles/global.style";
import React from "react";
import { BiBook } from "react-icons/bi";
import { RiUserSmileLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Popover, Tooltip } from "antd";

import CustomText from "../texts/Text";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecoilResizeState, SiderDrawState } from "@/states/state.config";

const MainHeader: React.FC = () => {
  const [drawOpen, setDrawOpen] = useRecoilState(SiderDrawState);
  const resizeStateValue = useRecoilValue(RecoilResizeState);

  return (
    <Container className="flex align-center">
      {ResoulutionReturner(resizeStateValue, true, true, false, false) && (
        <CustomCol className={"flex justify-start align-center gap-2"} span={8}>
          <Popover
            arrow={false}
            content={<>만들어야지 이제</>}
            placement={"bottomLeft"}
          >
            <CustomText
              size="ti"
              weight={500}
              color={AppTheme.color.text}
              hover={true}
              cursor={"pointer"}
            >
              Develop
            </CustomText>
          </Popover>

          <Popover
            arrow={false}
            content={<>만들어야지 이제</>}
            placement={"bottomLeft"}
          >
            <CustomText
              size="ti"
              weight={500}
              color={AppTheme.color.text}
              hover={true}
              cursor={"pointer"}
            >
              DevOps
            </CustomText>
          </Popover>
          <Popover
            arrow={false}
            content={<>만들어야지 이제</>}
            placement={"bottomLeft"}
          >
            <CustomText
              size="ti"
              weight={500}
              color={AppTheme.color.text}
              hover={true}
              cursor={"pointer"}
            >
              DevKit
            </CustomText>
          </Popover>
          <Popover
            arrow={false}
            content={<>만들어야지 이제</>}
            placement={"bottomLeft"}
          >
            <CustomText
              size="ti"
              weight={500}
              color={AppTheme.color.text}
              hover={true}
              cursor={"pointer"}
            >
              Game
            </CustomText>
          </Popover>
          <Popover
            arrow={false}
            content={<>만들어야지 이제</>}
            placement={"bottomLeft"}
          >
            <CustomText
              size="ti"
              weight={500}
              color={AppTheme.color.text}
              hover={true}
              cursor={"pointer"}
            >
              Life
            </CustomText>
          </Popover>
        </CustomCol>
      )}

      <CustomCol
        className={`flex align-center ${ResoulutionReturner(
          resizeStateValue,
          "justify-center",
          "justify-center",
          "justify-start",
          "justify-start"
        )}`}
        span={ResoulutionReturner(resizeStateValue, 8, 8, 12, 12)}
      >
        <CustomText
          weight={"bold"}
          color={AppTheme.color.text_bold}
          class_name="wind"
        >
          낭만개발자
        </CustomText>
      </CustomCol>
      <CustomCol
        className={"flex justify-end align-center gap-4"}
        span={ResoulutionReturner(resizeStateValue, 8, 8, 12, 12)}
      >
        <div className="icon-container cursor-pointer">
          <AiOutlineHome className="icon" size={24}></AiOutlineHome>
          <CustomText
            class_name="text"
            size="ti"
            weight={500}
            color={AppTheme.color.text}
          >
            홈
          </CustomText>
        </div>
        <div className="icon-container cursor-pointer">
          <BiBook className="icon" size={24}></BiBook>
          <CustomText
            class_name="text"
            size="ti"
            weight={500}
            color={AppTheme.color.text}
          >
            전체글
          </CustomText>
        </div>
        <div className="icon-container cursor-pointer">
          <RiUserSmileLine className="icon" size={24}></RiUserSmileLine>
          <CustomText
            class_name="text"
            size="ti"
            weight={500}
            color={AppTheme.color.text}
          >
            방명록
          </CustomText>
        </div>

        <Tooltip
          placement="bottom"
          title={"사이드 메뉴"}
          trigger="hover"
          className="cursor-pointer"
        >
          <MenuBox
            data-isopen={drawOpen}
            onClick={() => setDrawOpen(!drawOpen)}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.15 },
            }}
            whileTap={{ scale: 0.9, transition: { duration: 0.15 } }}
          >
            <motion.div
              className="child"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                stiffness: 100,
                repeatType: "mirror",
                duration: 3,
              }}
            />
          </MenuBox>
        </Tooltip>
      </CustomCol>
    </Container>
  );
};

export default MainHeader;
const Container = styled(CustomRow)`
  max-width: 1440px;
  margin: 0 auto;
  .icon-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  .text {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    transition: all 0.3s ease;
    opacity: 0;
    white-space: nowrap;
  }

  .icon-container:hover .icon {
    transform: translate(-50%, -70%);
    fill: ${AppTheme.color.primary};
    svg {
    }
  }

  .icon-container:hover .text {
    transform: translate(-50%, -20%);
    opacity: 1;
  }
  /* .wind {
    animation: wind 1s ease-in-out infinite alternate;
  }
  @keyframes wind {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(50px);
    }
  } */
`;
const MenuBox = styled(motion.div)`
  background-color: ${AppTheme.color.text};
  border-radius: 8px;
  position: relative;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;

  &[data-isopen="true"] {
    background: ${AppTheme.color.primary};

    .child {
      background-color: ${AppTheme.color.text};
    }
  }
  .child {
    width: 10px;
    height: 10px;
    background: ${AppTheme.color.primary};
    border-radius: 8%;
  }
`;
