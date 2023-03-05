import React, { useState } from 'react'
import CurrencyButton from './CurrencyButton'

type FilterType = 'All' | 'Rubles' | 'Dollars'

const Task05 = () => {

   const money = [
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

   let currentMoney = money

   if (filter === 'Dollars') {
      currentMoney = money.filter(((e) => e.banknotes === 'Dollars'))
   }
   if (filter === 'Rubles') {
      currentMoney = money.filter(((e) => e.banknotes === 'Rubles'))
   }

   const onClickFilterHandler = (currency: FilterType) => {
      setFilter(currency)
   }

   return (
      <>
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
         <CurrencyButton title={'All'} callBack={() => onClickFilterHandler('All')} data={money} />
         <CurrencyButton title={'Dollars'} callBack={() => onClickFilterHandler('Dollars')} data={money} />
         <CurrencyButton title={'Rubles'} callBack={() => onClickFilterHandler('Rubles')} data={money} />
      </>
   )
}

export default Task05