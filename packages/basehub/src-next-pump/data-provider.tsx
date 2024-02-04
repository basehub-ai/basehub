"use client";
import * as React from "react";

export type Children =
  | React.ReactNode
  | ((data: any) => React.ReactNode | Promise<React.ReactNode>);

const ClientQueryContext = React.createContext<
  undefined | null | { __thisIsData?: unknown }
>(undefined);

export const usePumpData = () => {
  const ctx = React.useContext(ClientQueryContext);
  if (ctx === undefined) throw new Error("no pump data");
  return ctx;
};

export const DataProvider = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) => {
  return (
    <ClientQueryContext.Provider value={data}>
      {children}
    </ClientQueryContext.Provider>
  );
};
