import type { TodoListProp } from "../types/Todo";

export function TodoList({ todos }: TodoListProp) {
    return (
        <div>
            {
                todos.map((todo) =>
                    <p key={todo.id}>{todo.text}</p>
                )
            }
        </div>
    )
}