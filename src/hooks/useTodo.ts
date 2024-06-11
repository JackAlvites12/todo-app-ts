import { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducer/todoReducer'
import { deleteAllTodosPromise, deleteTodoPromise, messageDeleteSucess } from '../alerts/alerts'
import { v4 as uuid } from 'uuid'
import { Todos } from '../types'


const init = (): Todos[] => {
    return JSON.parse( localStorage.getItem('todos')!) || []
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])


    const todosCount: number = todos.length
    const todosCompleteCount: number = todos.filter( todo => todo.done === true ).length
    const todosPendingCount: number = todos.filter( todo => todo.done === false ).length


    const onNewTodo = ( description: string ) => {

        const newTodo: Todos = {
            id: uuid(),
            description,
            done: false,
            createdAt: new Date().toLocaleDateString('es-ES'),
        }

        dispatch({
            type: '[TODO] add',
            payload: newTodo,
        })
        
    } 

    const onToggleTodo = ( id: string ) => {

        dispatch({
            type: '[TODO] toggle',
            payload: id,
        })

    }

    const onDeleteTodo = ( id: string ) => {

        deleteTodoPromise().then( result => {

            if ( result.isConfirmed ) {

                dispatch({
                    type: '[TODO] delete',
                    payload: id,
                })

                messageDeleteSucess()
     
            }
        })

    }

    const onDeleteAllTodos = () => {
        
        deleteAllTodosPromise().then( result => {

            if ( result.isConfirmed ) {

                dispatch({
                    type: '[TODO] delete all',
                })

                messageDeleteSucess()
     
            }
        })

    }


    return {
        todos,
        dispatch,
        todosCount,
        todosCompleteCount,
        todosPendingCount,
        onNewTodo,
        onToggleTodo,
        onDeleteTodo,
        onDeleteAllTodos,
    }
  
}
