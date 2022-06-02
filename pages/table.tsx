import React, { useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { RowTable } from "../components";
import { IComputer } from "../types";
import { computer } from "../constants";
import { IContext, Context } from "../context/state";
import arrowsImage from "../public/arrows.svg";

interface IsortFromTo {
  from: number;
  to: number;
}

const Table: React.FC = () => {
  const { listOfComputers } = useContext<IContext>(Context);
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [sortFromTo, setSortFromTo] = useState<IsortFromTo>({
    from: 1,
    to: -1,
  });
  const sortComputer = () =>
    currentCategory === "all"
      ? listOfComputers
      : listOfComputers
          .filter((field) => field[currentCategory as keyof IComputer]) // filter fields which was filled
          .sort((a, b) =>
            a[currentCategory as keyof IComputer] >
            b[currentCategory as keyof IComputer]
              ? sortFromTo.from
              : sortFromTo.to
          );

  const listOfRequiredFields = () => {
    const exceptions = ["id", "link"];
    return ["all", ...Object.keys(computer)].filter(
      (field) => !exceptions.includes(field)
    );
  };
  return (
    <div>
      <Head>
        <title>Table</title>
      </Head>
      <h1 className="text-4xl pb-3">Table</h1>
      <div className="flex items-center content-center pt-4">
        <span className="pr-3 text-xl text-ligthBlack">Sort by:</span>
        <select
          name="categories"
          value={currentCategory}
          onChange={(e) => setCurrentCategory(e.target.value)}
          className="mr-2 outline-0 bg-extraDarkBlack text-extraligthBlack capitalize p-1 cursor-pointer"
        >
          {listOfRequiredFields().map((category) => (
            <option key={category} value={category} className="capitalize">
              {category}
            </option>
          ))}
        </select>
        <Image
          onClick={() =>
            setSortFromTo({
              from: sortFromTo.to,
              to: sortFromTo.from,
            })
          }
          src={arrowsImage}
          alt="Picture of the author"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <div
        className="scrollbar max-h-440 flex flex-col overflow-y-auto
         mt-4 pr-3 "
      >
        {sortComputer().map((computer) => (
          <RowTable
            key={computer.id}
            computer={computer}
            currentCategory={currentCategory}
          />
        ))}
      </div>
    </div>
  );
};
export default Table;
