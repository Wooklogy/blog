import { atom } from "recoil";

// 화면 리사이즈 (반응형)
export const RecoilResizeState = atom<number>({
    key: `resize/${Math.random()}`,
    default: 0,
});

// 스크롤 Y (반응형)
export const RecoilScrollState = atom<number>({
    key: `scroll/${Math.random()}`,
    default: 0,
});
