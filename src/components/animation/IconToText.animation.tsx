import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import CustomText from "../texts/Text";

export interface IconToTextAnimationProps {
  text_color?: string;
  text?: string;
}

const IconToTextAnimation: React.FC<
  PropsWithChildren<IconToTextAnimationProps>
> = (props) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const { children } = props;

  const onHover = () => {
    setIsHover(true);
  };
  const offHover = () => {
    setIsHover(false);
  };

  return (
    <IconToTextAnimationStyle onMouseEnter={onHover} onMouseLeave={offHover}>
      <motion.div initial={false} animate={{ scale: isHover ? 0 : 1 }}>
        {children}
      </motion.div>

      <IconToTextAnimationItem
        initial={false}
        animate={{ scale: isHover ? 1 : 0 }}
      >
        <CustomText
          class_name="flex align-center justify-center"
          width={24}
          height={24}
          size={12}
          style={{ whiteSpace: "nowrap" }}
        >
          {props?.text || "현욱"}
        </CustomText>
      </IconToTextAnimationItem>
    </IconToTextAnimationStyle>
  );
};
export default IconToTextAnimation;

const IconToTextAnimationStyle = styled.div`
  width: max-content;
  cursor: pointer;
  position: relative;
  height: max-content;
`;
const IconToTextAnimationItem = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 0;
`;
