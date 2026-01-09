/* eslint-disable @typescript-eslint/no-unused-vars */
import { TypeCommon } from "../constants/common.constants";

export const isJsonObject = (strData: TypeCommon): boolean => {
  try {
    JSON.parse(strData);
  } catch (e) {
    return false;
  }
  return true;
};
