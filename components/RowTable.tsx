import React from "react";
import { IComputer } from "../types";
import { fildsMeasure } from "../constants";

interface RowTableProps {
  computer: IComputer;
  currentCategory: string;
}

export const RowTable: React.FC<RowTableProps> = ({
  computer,
  currentCategory,
}) => {
  const listOfRequiredFields = () => {
    const exceptions = ["id", "name", "link"];
    return Object.keys(computer).filter(
      (field) =>
        !exceptions.includes(field) && computer[field as keyof IComputer]
    );
  };
  return (
    <div className="py-1">
      <div className="flex justify-between">
        <p className="text-ligthBlack cursor-pointer">
          {computer.link.length ? (
            <a href={computer.link} target="_blank" rel="noopener noreferrer">
              {computer.name}
            </a>
          ) : (
            computer.name
          )}
          &ensp;|&ensp;
          {`${computer.price.toLocaleString()}грн`}
        </p>
      </div>
      <div className="flex flex-wrap mt-2">
        {listOfRequiredFields().map((characteristic) => (
          <div
            key={characteristic}
            className={`border-2 border-ligthBlack px-2 py-1 rounded-xl mr-2 mb-3 text-sm text-ligthBlack ${
              currentCategory === characteristic
                ? "bg-ligthBlack text-extraDarkBlack"
                : ""
            }`}
          >
            <span className="capitalize">
              {`${characteristic}: `}
              {computer[characteristic as keyof IComputer]}
            </span>
            <span>{fildsMeasure[characteristic as keyof IComputer]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
