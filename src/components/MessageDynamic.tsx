import { MessageType } from "../types"


export const MessageDynamic: React.FC<MessageType> = ({ message }) => {
  return (
    <div className='mt-5 h-[320px] flex justify-center items-center'>
        <h2 className='text-center text-2xl font-bold'>{ message }</h2>
    </div>
  )
}
