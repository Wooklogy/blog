/* eslint-disable react-hooks/exhaustive-deps */
import { RecoilResizeState, RecoilScrollState } from "@/states/state.config";
import React, { PropsWithChildren } from "react";
import { useRecoilState } from "recoil";
const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const [, setResize] = useRecoilState(RecoilResizeState);
    const [, setScrollY] = useRecoilState(RecoilScrollState);

    const handleResize = () => {
        setResize(window.innerWidth);
    };

    const handleScroll = () => {
        setScrollY(document.body.scrollTop);
    };

    React.useEffect(() => {
        setResize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        document.body.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return <>{children}</>;
};
export default DefaultLayout;
