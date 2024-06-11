import { FormEvent, useContext } from "react"
import { messageAddSucess, messageDuplicateError } from "../alerts/alerts"
import { useForm } from "../hooks"
import { TodoContext } from "../context/TodoContext"


export const TodoAddForm = () => {

  const { todos, onNewTodo } = useContext( TodoContext )

  
  const { description, onInputChange, onResetForm } = useForm({
      description: ''
  })

  const handleNewTodo = ( event : FormEvent<HTMLFormElement> ) => {

    event.preventDefault()

    const isDuplicated: boolean = todos.some( todo => todo.description === description )
        
    if( description.trim().length <= 1) return
    
    if( isDuplicated ) return messageDuplicateError()  

    onNewTodo( description )

    messageAddSucess()

    onResetForm()

}

  return (
        <form onSubmit={ handleNewTodo }>
            <input className="mobile:w-[70%] block w-[80%] my-4 m-auto p-4 bg-gray-200 border-b-2 border-b-gray-800 outline-none placeholder:text-sm"
                type="text" 
                placeholder='Añade una tarea... (máx. 35 letras)'
                maxLength={ 35 }
                name='description'
                value={ description }
                onChange={ onInputChange }
            />
        </form>
  )
}
// 