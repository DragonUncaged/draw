import { atom } from "recoil";

export const modalAtom = atom<{
  modal: JSX.Element | JSX.Element[];
  opened: boolean;
}>({
  key: `modalAtom_${Math.random()}`,
  default: {
    modal: <></>,
    opened: false,
  },
});
