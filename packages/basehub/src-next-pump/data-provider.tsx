import { type ReactNode, createContext, useContext } from "react";

export type Children =
  | ReactNode
  | ((data: any) => ReactNode | Promise<ReactNode>);

const ClientQueryContext = createContext<
  undefined | null | { __thisIsData?: unknown }
>(undefined);

export const usePumpData = () => {
  "use client";
  const ctx = useContext(ClientQueryContext);
  if (ctx === undefined) throw new Error("no pump data");
  return ctx;
};

export const DataProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: any;
}) => {
  return (
    <ClientQueryContext.Provider value={data}>
      {children}
    </ClientQueryContext.Provider>
  );
};
