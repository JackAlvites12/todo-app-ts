import { useContext } from "react"
import { TodoContext,  } from "../context/TodoContext"
import { TodoList,TodoAddForm, MessageDynamic } from "../components"
import { Todos } from "../types"


export const CompletedTodos = () => {

  const { todos, todosCompleteCount } = useContext( TodoContext )

  const completeTodos: Todos[] = todos.filter( todo => todo.done === true )
  

  return (

    <>

        <TodoAddForm />

        {
          ( todosCompleteCount === 0 ) ? <MessageDynamic message="No hay ninguna tarea completa."/> : <TodoList todos={ completeTodos }/>

        }
    
    </>

        
  )
}
