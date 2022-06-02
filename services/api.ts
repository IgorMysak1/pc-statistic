import axios from "axios";
import { IComputer } from "../types/computer";

export const editComputerInDB = async (data: IComputer) => {
  try {
    const response = await axios.patch(
      `http://localhost:3001/computers/${data.id}`,
      data
    );
    return response.data;
  } catch (e) {
    console.log("Error" + e);
  }
};

export const addComputerInDB = async (data: IComputer) => {
  try {
    const response = await axios.post(`http://localhost:3001/computers`, data);
    return response.data;
  } catch (e) {
    console.log("Error" + e);
  }
};

export const deleteComputerInDB = async (id: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/computers/${id}`
    );
    return response.data;
  } catch (e) {
    console.log("Error" + e);
  }
};
