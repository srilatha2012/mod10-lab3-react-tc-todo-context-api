import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";



const TodoInput = () => {
    const [todoInput, setTodoInput] = useState<string>("");
    const {addTodo} = useTodos();

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setTodoInput(e.target.value);

    }
    function addTodoHandler(e: React.FormEvent) {
        e.preventDefault();

        if (todoInput.trim() === "") return;
        addTodo(todoInput)

        setTodoInput("");

    }

    return (
        <form onSubmit={addTodoHandler}>
            <input
                type="text"
                value={todoInput}
                placeholder="What need to be done"
                onChange={handleInput}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}

export default TodoInput