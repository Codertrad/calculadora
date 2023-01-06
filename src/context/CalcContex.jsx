import { createContext } from "react";
import { useState } from "react";

export const CalcContext = createContext()

export const CalcProvider = ({children}) => {

   const [Numbers, setNumbers] = useState("")

   const addNum = (e) => {
      setNumbers(Numbers.concat(e.target.name))
   }

   const clear = () => {
      setNumbers("")
   }

   const backSpace = () => {
      setNumbers(Numbers.slice(0, -1))
   }

   const result = () =>{
      try{
         // eslint-disable-next-line no-eval
         setNumbers(eval(Numbers))
      }catch{
         setNumbers("ERROR")
      }
   }

   return (
      <CalcContext.Provider value={{Numbers, addNum, clear, backSpace, result}}>
         {children}
      </CalcContext.Provider>
   )
}