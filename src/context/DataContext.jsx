import { createContext,useState} from "react";

const DataContext = createContext();



function DataProvider({ children }) {
  const[theme,setTheme]=useState(localStorage.getItem('theme')==""? "":"dark")
  const toggleTheme = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme',newTheme)

  }
  return (
     <DataContext.Provider value={{theme,toggleTheme}}>
      {children}
     </DataContext.Provider>
  );

}

export default DataContext;
export {DataProvider}
