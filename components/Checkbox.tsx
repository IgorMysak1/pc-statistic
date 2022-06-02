import React, { Dispatch, SetStateAction } from "react";
import { ICategory } from "../types";

interface CheckboxProps {
  styles?: string;
  name: string;
  categoryComputer: ICategory;
  setCategoryComputer: Dispatch<SetStateAction<ICategory>>;
}
export const Checkbox: React.FC<CheckboxProps> = ({
  styles = "",
  name,
  categoryComputer,
  setCategoryComputer,
}) => {
  return (
    <label className={`capitalize text-2xl pr-5 text-ligthBlack ${styles}`}>
      {name}
      <input
        type="checkbox"
        className="ml-1"
        checked={!!categoryComputer[name as keyof ICategory]}
        onChange={() =>
          setCategoryComputer({
            ...categoryComputer,
            [name]: !categoryComputer[name as keyof ICategory],
          })
        }
      />
      <span className="checkmark"></span>
    </label>
  );
};
