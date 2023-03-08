import React, { useState } from 'react'
import App from '../../Practice01/Practice01';

type Props = {}

const Task04 = (props: Props) => {

   //let a = 1

   let [a, setA] = useState(1)

   const onClickHandler = () => {
      setA(a += 1)
   }

   const onClickHandlerNull = () => {
      setA(a = 0)
   }


   return (
      <div>
         <h1>{a}</h1>
         <button onClick={onClickHandler}>number</button>
         <button onClick={onClickHandlerNull}>Обнулить число</button>
      </div>
   )
}

export default Task04