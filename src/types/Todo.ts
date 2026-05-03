export type Todo = {
    id : number;
    text : string;
    completed : boolean;
}

export type TodoContextType ={
    todos : Todo[];
}

export type TodoListProp ={
    todos : Todo[]
}
