import React, { useContext } from "react";
import AppStore from "./AppStore";

interface IAppContextType {
  appStore: AppStore;
}

const AppContext = React.createContext<null | IAppContextType>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as IAppContextType;
};

export default AppContext;
