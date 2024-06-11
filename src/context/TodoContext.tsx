import { createContext } from "react";
import { TodoContextProps } from "../types";


export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);