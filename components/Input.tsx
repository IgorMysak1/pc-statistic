import React, { Dispatch, SetStateAction } from "react";
import { IComputer } from "../types";

interface InputProps {
  field: string;
  fields: IComputer;
  setFields: Dispatch<SetStateAction<IComputer>>;
}
export const Input: React.FC<InputProps> = ({ field, fields, setFields }) => {
  return (
    <div className="flex flex-col w-1/4 m-2">
      <span className="capitalize mb-1">{field}</span>
      <input
        className=" p-1 text-black outline-none rounded-md"
        type="text"
        value={fields[field as keyof IComputer] || ""}
        onChange={(e) => setFields({ ...fields, [field]: e.target.value })}
      />
    </div>
  );
};
