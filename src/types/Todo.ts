export type Todo = {
    id : number;
    text : string;
    completed : boolean;
}

export type TodoContextType ={
    todos : Todo[];
    addTodo : (text : string) => void;
    toggleTodo : (id : number) => void;
    deleteTodo : (id: number) => void;
    editTodo : (id: number, newText : string) => void;
    clearCompleted : () => void;
}

export type TodoListProp ={
    todos : Todo[];
}

export type TodoItemProp = {
    todo : Todo;
}
