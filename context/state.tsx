import React, { useState, Dispatch, SetStateAction } from "react";
import { IComputer } from "../types/computer";

export interface IContext {
  listOfComputers: IComputer[];
  setListOfComputers: Dispatch<SetStateAction<IComputer[]>>;
}

interface ProviderAppProps {
  children: React.ReactNode;
  computers: IComputer[];
}

export const Context = React.createContext<IContext>({} as IContext);
export const ProviderApp: React.FC<ProviderAppProps> = ({
  children,
  computers,
}) => {
  const [listOfComputers, setListOfComputers] =
    useState<IComputer[]>(computers);
  const listDataPass: IContext = {
    listOfComputers,
    setListOfComputers,
  };
  return <Context.Provider value={listDataPass}>{children}</Context.Provider>;
};
