import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Input } from "../components";
import { IComputer, IModify } from "../types";

interface ModifyProps {
  isModify: IModify;
  setIsModify: Dispatch<SetStateAction<IModify>>;
}

export const Modify: React.FC<ModifyProps> = ({ isModify, setIsModify }) => {
  const [fields, setFields] = useState<IComputer>(isModify.state);
  const modifyComputer = () => {
    setIsModify((prevModify) => ({
      ...prevModify,
      modifyStatus: !prevModify.modifyStatus,
    }));
    isModify.saveModifying(fields);
  };
  const listOfRequiredFields = () => {
    const exceptions = ["id", "category"];
    return Object.keys(fields).filter((field) => !exceptions.includes(field));
  };
  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-wrap justify-between">
        {listOfRequiredFields().map((field) => (
          <Input
            key={field}
            field={field}
            fields={fields}
            setFields={setFields}
          />
        ))}
      </div>
      <Button
        name="save"
        styles="px-6 py-3 mr-2 mt-4"
        handler={modifyComputer}
      />
    </div>
  );
};
