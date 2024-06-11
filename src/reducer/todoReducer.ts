import { ActionTypes, Todos } from "../types"




export const todoReducer = ( initialState: Todos[], action: ActionTypes ): Todos[] => {

    switch ( action.type ) {

        case "[TODO] add":
            
            return [ action.payload, ...initialState ]
    
        case "[TODO] toggle":

            return initialState.map( todo => {

                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })

        case "[TODO] delete": 

            return initialState.filter( todo => todo.id !== action.payload )

        case "[TODO] delete all":
            
            return [];

        default:

            return initialState;
            
    }


}