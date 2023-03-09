import React, { ChangeEvent, useState } from 'react'
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';



const Task06 = () => {
   const [message, setMessage] = useState([
      { message: 'message1' },
      { message: 'message2' },
      { message: 'message3' },
      { message: 'message4' },
      { message: 'message5' }
   ]
   )

   const addMessage = (title: string) => {
      setMessage([{ message: title }, ...message])
   }

   const [title, setTitle] = useState('')

   const callBack = () => {
      addMessage(title)
      setTitle('')
   }

   return (
      <div>
         {/* <FullInput addMessage={addMessage}/> */}
         <Input title={title} setTitle={setTitle} />
         <Button name='X' callBack={callBack} />
         {message.map((m, i) => {
            return (
               <div key={i}>{m.message}</div>
            )
         })}
      </div>
   )
}

export default Task06