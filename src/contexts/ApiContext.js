import { createContext, useState, useContext } from "react";
import axios from "../api/axois"

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [tevekenysegek, setTevekenysegek] = useState([]);
    //Ide lehet api hívásokat kérni
    const getTevekenysegek = async () => {
        try {
            const { data } = await axios.get("/api/tevekenysegek");
            setTevekenysegek(data);
        } catch (error) {
            console.error("Hiba történt az adatok lekérése közben:", error);
        }
    };

  
  
    return (
      <ApiContext.Provider value={{ getTevekenysegek, tevekenysegek }}>
        {children}
      </ApiContext.Provider>
    );
  };
  
  export default function useApiContext() {
    return useContext(ApiContext);
  }