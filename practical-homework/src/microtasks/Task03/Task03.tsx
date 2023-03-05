import React, { MouseEvent, useState } from 'react'
import './../../App.css'
import { Button } from './components/Button'

const Task03 = () => {

   const Button1Foo = (subscriber: string, age: number, address: string) => {
      console.log(subscriber, age, address)
   }

   const Button2Foo = (subscriber: string) => {
      console.log(subscriber)
   }

   const Button3Foo = () => {
      console.log('Im stupid button')
   }

   return (
      //    const onClickHandler = (name: string) => {
      //       console.log(name)
      //    }
      <div className='App'>
         {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('VASYA')}>MyYouTubeChannel-1</button> */}
         {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('IVAN')}>MyYouTubeChannel-2</button> */}
         <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Minsk')} />
         <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Im Ivan')} />
         <Button name={'STUPID_BUTTON'} callBack={Button3Foo} />
      </div >
   )
}

export default Task03