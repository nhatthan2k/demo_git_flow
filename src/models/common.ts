import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypeCommon = any;

export type RouteProps = {
  path?: string | undefined;
  component?: React.ComponentType | TypeCommon;
};

export type DocumentProps = {
  index: string;
  id: string;
  userCreat: string;
  userApprove: string;
  date: TypeCommon;
  status: TypeCommon;
  dateApprove: TypeCommon;
};

export type UserProps = {
  id: string;
  userId: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
};
