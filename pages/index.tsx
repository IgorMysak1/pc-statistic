import { useState, useContext } from "react";
import Head from "next/head";
import { Button, PreviewComputer, Modify } from "../components";
import { IComputer, IModify, ICategory } from "../types";
import { computer } from "../constants/computer";
import { IContext, Context } from "../context/state";
import { addComputerInDB } from "../services/api";

const Home: React.FC = () => {
  const { listOfComputers, setListOfComputers } = useContext<IContext>(Context);
  const [isModify, setIsModify] = useState<IModify>({
    modifyStatus: false,
    state: computer,
    saveModifying: () => null,
  });

  const addComputer = async (data: IComputer) => {
    const id = new Date().getTime();
    const newDataAboutComputer = {
      ...data,
      id,
      price: +data.price,
      screen: +data.screen,
      hdd: +data.hdd,
      ssd: +data.ssd,
      ram: +data.ram,
      weight: +data.weight,
      category: "saved",
    };
    await addComputerInDB(newDataAboutComputer);
    setListOfComputers((prevComputers) => [
      ...prevComputers,
      newDataAboutComputer,
    ]);
  };

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex justify-between">
        <h1 className="text-4xl pb-3">
          {isModify.modifyStatus ? "Modifying computer" : "List of computers"}
        </h1>
        {isModify.modifyStatus ? (
          <Button
            styles="px-6 py-1"
            handler={() =>
              setIsModify((prevModify) => ({
                ...prevModify,
                modifyStatus: !prevModify.modifyStatus,
              }))
            }
            name="Close"
          />
        ) : (
          <Button
            handler={() =>
              setIsModify((prevModify) => ({
                state: computer,
                modifyStatus: !prevModify.modifyStatus,
                saveModifying: (data: IComputer) => addComputer(data),
              }))
            }
            styles="px-3"
            name="Add device"
          />
        )}
      </div>
      {isModify.modifyStatus ? (
        <Modify isModify={isModify} setIsModify={setIsModify} />
      ) : (
        <PreviewComputer setIsModify={setIsModify} />
      )}
    </div>
  );
};
export default Home;
