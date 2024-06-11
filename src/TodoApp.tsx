
import { useContext } from 'react'
import { TodoAddForm, TodoList } from './components'
import { MessageDynamic } from './components/MessageDynamic'
import { TodoContext } from './context/TodoContext'


export const TodoApp = () => {
  
  const { todos, todosCount } = useContext( TodoContext )

  return (

    <>
      <TodoAddForm />
      
      {
        ( todosCount === 0 ) ? <MessageDynamic message="Lista vacía, agregue una tarea."/> : <TodoList todos={ todos }/>
      }

    </>

  )
}
