import { useTodos } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
    const {todos} = useTodos();
    return (
        <div>
            {
                todos.map((todo) => (
                    <TodoItem key ={todo.id} todo ={todo}/>
                ))
            }
        </div>
    )
}