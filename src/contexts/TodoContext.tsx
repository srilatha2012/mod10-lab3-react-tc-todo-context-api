import { createContext, useContext, useState } from "react";
import type { Todo, TodoContextType } from "../types/Todo";

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(text: string) {
        if (text.trim() === "") return;
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
        }
        setTodos((prev) => [...prev, newTodo]);
    }

    function toggleTodo(id: number) {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function deleteTodo(id: number) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));

    }

    function editTodo(id: number, newText: string) {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            ));
    }

    function clearCompleted() {
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                toggleTodo,
                deleteTodo,
                editTodo,
                clearCompleted,

            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export function useTodos() {
    const context = useContext(TodoContext);
    if(!context) {
        throw new Error("useTodos must be used inside TodoProvider")
    }
    return context;

}