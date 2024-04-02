import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo message",
            completed:false,
        }
    ],
   //we write fiunctionalities in some other components;
   addTodo:(todo)=>{},
   updateTodo:(id,todo)=>{},
   deleteTodo:(id,todo)=>{},
   toggleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(TodoContext)
}
//just no need to write TodoContext.Provider in other files 
export const TodoProvider=TodoContext.Provider