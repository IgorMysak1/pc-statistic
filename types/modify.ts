import { IComputer } from "./computer";
export interface IModify {
  modifyStatus: boolean;
  state: IComputer;
  saveModifying: (data: IComputer) => void;
}
