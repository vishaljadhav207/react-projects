import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},//just a function but functionallity is here 
})

export const ThemeProvider=ThemeContext.Provider;
//another method of context provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}