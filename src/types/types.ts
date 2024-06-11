import { Dispatch } from "react"

export type MessageType = {
    message: string
}

export type InitialForm = {
    description: string;
}


export interface ChildrenType {
    children: JSX.Element | JSX.Element[];
  }

export type Props = {
    todos: Todos[]
}


export interface Todos {
    id: string;
    description: string;
    done: boolean;
    createdAt: string;
}

export type ActionTypes = 
    | { type: '[TODO] add', payload: Todos}
    | { type:  '[TODO] toggle', payload: string }
    | { type: '[TODO] delete', payload: string }
    | { type: '[TODO] delete all' }

    
export interface TodoContextProps {
    todos: Todos[];
    dispatch: Dispatch<ActionTypes>;
    todosCount: number;
    todosCompleteCount: number;
    todosPendingCount: number;
    onNewTodo: ( description: string ) => void;
    onToggleTodo: ( id: string ) => void; 
    onDeleteTodo: ( id: string ) => void; 
    onDeleteAllTodos: () => void;
}


