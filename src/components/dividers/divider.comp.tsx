import { translatePxValue } from "@/styles/global.style";
import { Divider, DividerProps } from "antd";
import styled from "styled-components";

export interface CustomDividerProps extends DividerProps {
    width?: string | number;
    height?: string | number;
    border_width?: string | number;
    color?: string;
}

const CustomDivider: React.FC<CustomDividerProps> = (props) => {
    return <DividerStyle {...props}></DividerStyle>;
};

export default CustomDivider;

const DividerStyle = styled(Divider)<CustomDividerProps>`
    border-block-start: ${(props) => translatePxValue(props.border_width || 1)}
        solid ${(props) => props.color || "rgba(5, 5, 5, 0.06)"};
`;
