import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";
import type { TodoItemProp } from "../types/Todo";

export function TodoItem({ todo }: TodoItemProp) {

    const { toggleTodo, deleteTodo, editTodo } = useTodos();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    function handleSave() {
        editTodo(todo.id, editText);
        setIsEditing(false);
    }
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {isEditing ? (
                <>
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>

            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>

            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>

        </div>

    )
}