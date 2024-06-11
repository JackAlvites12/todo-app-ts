import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { MessageDynamic, TodoAddForm, TodoList } from "../components"
import { Todos } from "../types"


export const PendingTodos = () => {

    const { todos, todosPendingCount } = useContext( TodoContext )

    const pendingTodos: Todos[] = todos.filter( todo => todo.done === false )

  return (
    <>

        <TodoAddForm />

        {
            ( todosPendingCount === 0 ) ?  <MessageDynamic message="No hay ninguna tarea pendiente."/> : <TodoList todos={ pendingTodos }/>

        }

    </>
  )
}
