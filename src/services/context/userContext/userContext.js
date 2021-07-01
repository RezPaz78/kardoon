import { createContext, useContext } from "react";

export const userInitialState = {};

export const userContext = createContext(userInitialState);
export const useUser = () => useContext(userContext);
