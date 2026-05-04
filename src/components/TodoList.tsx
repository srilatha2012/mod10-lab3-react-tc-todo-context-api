import { useFilter } from "../contexts/FilterContext";
import { useTodos } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
    const {todos, clearCompleted} = useTodos();
    const {filter} = useFilter();

    const filteredTodos = todos.filter((todo) => {
        if(filter == "active") return !todo.completed;
        if(filter == "completed") return todo.completed;
        return true;
    })
    return (
        <div>
            {
                filteredTodos.map((todo) => (
                    <TodoItem key ={todo.id} todo ={todo}/>
                ))
            }
            <button onClick = {clearCompleted}>Clear Completed</button>
        </div>
    )
}