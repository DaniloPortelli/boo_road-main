import { createContext, useContext } from "react";
import travelers from "../data/travelersArray";
import tripsArray from "../data/tripsArray"

const GlobalContext = createContext();

function GlobalProvider({ children }) {

    
  
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
}
const useGlobalContext = () => useContext(GlobalContext);
export { GlobalProvider, useGlobalContext };