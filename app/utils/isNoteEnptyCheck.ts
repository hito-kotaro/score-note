import { Data } from "../types/input";

  export const isNotEmptyCheck = (data:Data) => {
    return Object.values(data).every((value) => value !== "");
  };
