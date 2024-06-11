import { ChangeEvent, useState } from "react"
import { InitialForm } from "../types"




export const useForm = ( initialForm: InitialForm ) => {

    const [ formState, setFormState ] = useState<InitialForm>( initialForm )

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement> ) => {

        const { name, value } = target

        setFormState({
            ...formState,
            [ name ]: value,
        })

    }

    const onResetForm = () => {
        setFormState({ description: ''})
    }


    return {
        ...formState,
        onInputChange,
        onResetForm,

    }
}
