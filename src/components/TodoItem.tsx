import { useContext } from "react"
import { TodoContext,  } from "../context/TodoContext"
import { Todos } from "../types"


export const TodoItem = ({ id, description, done, createdAt }: Todos ) => {

   const { onToggleTodo, onDeleteTodo } = useContext( TodoContext ) 

  return (
    <>
      <li className="w-[290px] h-[110px] flex justify-center rounded-[24px] shadow-lg ">

          <button className={`w-10  rounded-l-3xl transition-all hover:bg-green-500 outline-none  ${ done ? 'bg-green-500' : 'bg-slate-300' }`} onClick={ () => onToggleTodo( id ) }><box-icon name='check' color="white"></box-icon></button>  

          <div className="p-1">
            <span className="block text-sm font-semibold text-end text-gray-500">{ createdAt }</span>
            <p className={`w-[210px] break-words pt-1 text-lg font-semibold text-center  ${ done ? 'line-through' : '' }`}>{ description }</p> 
          </div>

          <button className="w-10 rounded-r-3xl bg-red-600" onClick={ () => onDeleteTodo( id ) }><box-icon name="trash" color="white" animation="tada-hover"></box-icon></button>


      </li>
    </>
  )

}
