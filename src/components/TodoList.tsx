import { useContext } from 'react'
import { TodoItem } from './TodoItem'
import { TodoContext } from '../context/TodoContext'
import { Props, Todos } from '../types'



export const TodoList = ({ todos }: Props ) => {

    const { onDeleteAllTodos } = useContext( TodoContext )

  return (

    <section className='list overflow-auto h-[410px] custom:h-[690px]'>
        <h6 className="m-auto w-[70%] text-end underline cursor-pointer text-sm text-red-600 font-semibold " onClick={ ()=> onDeleteAllTodos() }>Borrar todo</h6>

        <ul className='p-4 flex flex-col items-center gap-5'>
            {
                todos.map(({ id, description, done, createdAt }: Todos ): JSX.Element => (
                    
                    <TodoItem 
                        key={ id }
                        id={ id } 
                        description={ description } 
                        done={ done } 
                        createdAt = { createdAt } 
                    />

                ))
            }
        </ul>
    </section>



  )
}
