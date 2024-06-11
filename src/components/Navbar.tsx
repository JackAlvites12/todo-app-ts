import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { TodoContext } from "../context/TodoContext"


export const Navbar = () => {

    const { todosCount, todosPendingCount, todosCompleteCount  } = useContext( TodoContext )

  return (
    <section className="flex flex-col pt-10 text-center gap-5">
        <h1 className="text-[50px] font-bold">Tareas</h1>

        <div className="font-medium flex justify-evenly">
            <NavLink to="/" className={ ({ isActive }) => `none text-blue-400 ${ isActive ? 'border-b-2 border-b-blue-400' : '' }` }>
                Todos ({ todosCount })
            </NavLink>
            
            <NavLink to="/pendingTodos" className={ ({ isActive }) => `none text-blue-400 ${ isActive ? 'border-b-2 border-b-blue-400' : '' }` }>
                Pendientes ({ todosPendingCount })
            </NavLink>

            <NavLink to="/completeTodos" className={ ({ isActive }) => `none text-blue-400 ${ isActive ? 'border-b-2 border-b-blue-400' : '' }` }>
                Completos ({ todosCompleteCount })
            </NavLink>
        </div>
    </section>

  )
}
