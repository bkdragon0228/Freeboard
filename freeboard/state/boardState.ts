import { atom } from "recoil";
import { IBoard } from "../src/commons/types/generated/types";

export const boardState = atom<IBoard>({
  key: "boardState",
  default: null,
});
