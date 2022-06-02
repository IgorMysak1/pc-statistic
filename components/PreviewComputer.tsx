import React, { useState, Dispatch, SetStateAction, useContext } from "react";
import { Button, Checkbox } from "../components";
import { IComputer, ICategory, IModify } from "../types";
import { editComputerInDB, deleteComputerInDB } from "../services/api";
import { Context } from "../context/state";

interface PreviewComputerProps {
  setIsModify: Dispatch<SetStateAction<IModify>>;
}

export const PreviewComputer: React.FC<PreviewComputerProps> = ({
  setIsModify,
}) => {
  const { listOfComputers, setListOfComputers } = useContext(Context);
  const [categoryComputer, setCategoryComputer] = useState<ICategory>({
    recommended: true,
    saved: true,
  });

  const editComputer = async (data: IComputer) => {
    const newData = {
      ...data,
      price: +data.price,
      screen: +data.screen,
      hdd: +data.hdd,
      ssd: +data.ssd,
      ram: +data.ram,
      weight: +data.weight,
    };
    const editListofComputers = listOfComputers.map((computer) =>
      computer.id === data.id ? newData : computer
    );
    setListOfComputers(editListofComputers);
    await editComputerInDB(newData);
  };

  const deleteComputer = async (id: number) => {
    await deleteComputerInDB(id);
    setListOfComputers(
      listOfComputers.filter((computer) => computer.id !== id)
    );
  };

  const filteredByComputerCategory = (): IComputer[] =>
    listOfComputers.filter((computer: IComputer) =>
      Object.keys(categoryComputer).some(
        (kindOfCategory) =>
          computer.category === kindOfCategory &&
          categoryComputer[kindOfCategory as keyof ICategory]
      )
    );
  return (
    <>
      <div className="flex pt-8 pb-2">
        {Object.keys(categoryComputer).map((category) => (
          <Checkbox
            key={category}
            name={category}
            categoryComputer={categoryComputer}
            setCategoryComputer={setCategoryComputer}
          />
        ))}
      </div>
      <div
        className={`scrollbar max-h-440 flex-col overflow-y-auto
         mt-4 pr-3 flex`}
      >
        {filteredByComputerCategory().map((computer, index) => (
          <div
            key={computer.id}
            className="flex justify-between pt-4 first:py-0"
          >
            <span className="text-ligthBlack">{computer.name}</span>
            <div>
              <Button
                handler={() =>
                  setIsModify((prevModify) => ({
                    state: listOfComputers[index],
                    modifyStatus: !prevModify.modifyStatus,
                    saveModifying: (data: IComputer) => editComputer(data),
                  }))
                }
                styles="px-3 py-1"
                name="Edit"
              />
              <Button
                handler={() => deleteComputer(computer.id)}
                styles="ml-3 px-2 py-1"
                disabled={computer.category === "recommended"}
                name="Delete"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
