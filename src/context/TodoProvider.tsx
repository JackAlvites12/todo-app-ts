import { TodoContext } from "./TodoContext"
import { useTodo } from "../hooks"
import { ChildrenType } from "../types"


export const TodoProvider = ({ children }: ChildrenType ) => {

  const { todos, dispatch, todosCount, todosCompleteCount, todosPendingCount, onNewTodo, onToggleTodo, onDeleteTodo, onDeleteAllTodos } = useTodo() 

  return (
    <TodoContext.Provider value={{ todos, dispatch, todosCount, todosCompleteCount, todosPendingCount, onNewTodo, onToggleTodo, onDeleteTodo, onDeleteAllTodos }}>
        { children }
    </TodoContext.Provider>
  )
}
