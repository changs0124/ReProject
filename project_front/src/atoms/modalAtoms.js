import { atom } from "recoil";

export const sideBarModalAtom = atom({
    key: "sideBarModalState",
    default: false,
});

export const registerModalAtom = atom({
    key: "registerModalState",
    default: false,
});

export const modifyModalAtom = atom({
    key: "modifyModalState",
    default: false,
});