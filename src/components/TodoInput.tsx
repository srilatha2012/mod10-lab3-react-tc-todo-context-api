import { createContext, useState } from "react";
import type { Todo, TodoContextType } from "../types/Todo";
import { TodoList } from "./TodoList";


 export const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoInput = () =>{
   const[todoInput, setTodoInput] = useState<string>("");
   const[todos,setTodos] = useState<Todo[]>([]);
  


   function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setTodoInput(e.target.value);
        
   }
   function addTodoHandler() {
    if(todoInput.trim() === "")  return;
    const newTodo : Todo = {
        id: Date.now(),
        text: todoInput,
        completed: false,
    }
    setTodos((prev) => [...prev, newTodo]);
    setTodoInput("");

   }
  
    return(
        <div>
            <input 
             type="text"
             value={todoInput}
             placeholder="What need to be done"
             onChange={handleInput} 
            />
            <button
            onClick={addTodoHandler} 
            >
            Add Todo
            </button>
           <TodoList todos ={todos}/>
        </div>
    )
}

export default TodoInput