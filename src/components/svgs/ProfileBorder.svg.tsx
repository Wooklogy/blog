import { motion } from "framer-motion";
import styled from "styled-components";

const SVGProfileBorder: React.FC = () => {
  return <BorderContainer></BorderContainer>;
};
export default SVGProfileBorder;

const BorderContainer = styled(motion.div)`
  width: 128px;
  height: 128px;
  border-radius: 12px;
  margin: 0 auto;
  border: dashed red 2px;
`;
