import React, { useState } from 'react'
import { Button } from './components/Button'

const Task03 = () => {

   // const Button1Foo = (subscriber: string, age: number, address: string) => {
   //    console.log(subscriber, age, address)
   // }

   // const Button2Foo = (subscriber: string) => {
   //    console.log(subscriber)
   // }

   // const Button3Foo = () => {
   //    console.log('Im stupid button')
   // }
   type FilterType = 'All' | 'Rubles' | 'Dollars'

   type MoneyType = {
      banknotes: string
      value: number
      number: string
   }

   const money: MoneyType[] = [
      { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
      { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
      { banknotes: 'Rubles', value: 100, number: ' w1234567890' },
      { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
      { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
      { banknotes: 'Rubles', value: 100, number: ' r1234567890' },
      { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
      { banknotes: 'Rubles', value: 50, number: ' v1234567890' },
   ]

   const [filter, setFilter] = useState<FilterType>('All')

   const onClickFilterHandler = (currency: FilterType) => {
      setFilter(currency)
   }

   let currentMoney = money
   if (filter === 'Dollars') {
      currentMoney = money.filter(((e) => e.banknotes === 'Dollars'))
   }
   if (filter === 'Rubles') {
      currentMoney = money.filter(((e) => e.banknotes === 'Rubles'))
   }

   return (
      //    const onClickHandler = (name: string) => {
      //       console.log(name)
      //    }
      <div>
         {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('VASYA')}>MyYouTubeChannel-1</button> */}
         {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('IVAN')}>MyYouTubeChannel-2</button> */}
         {/* <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Minsk')} />
         <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Im Ivan')} />
         <Button name={'STUPID_BUTTON'} callBack={Button3Foo} /> */}
         <ul>
            {currentMoney.map((e, i) => {
               return (
                  <li key={i}>
                     <span>{e.banknotes}</span>
                     <span>{e.number}</span>
                     <span>{e.value}</span>
                  </li>
               )
            })}
         </ul>
         <div style={{marginLeft: "40px"}}>
            <Button title='All' callBack={() => onClickFilterHandler('All')} />
            <Button title='Rubles' callBack={() => onClickFilterHandler('Rubles')} />
            <Button title='Dollars' callBack={() => onClickFilterHandler('Dollars')} />
         </div>
      </div >
   )
}

export default Task03