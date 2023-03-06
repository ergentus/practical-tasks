import React from 'react'
import { FilterType } from './Task05'

export type MoneyType = {
   banknotes: string
   value: number
   number: string
}

type CurrencyButtonTypeProps = {
   data: MoneyType[]
   onClickFilter: (currency: FilterType) => void
}

const CurrencyButton = (props: CurrencyButtonTypeProps) => {
   return (
      <>
         <ul>
            {props.data.map((e, i) => {
               return (
                  <li key={i}>
                     <span>{e.banknotes}</span>
                     <span>{e.number}</span>
                     <span>{e.value}</span>
                  </li>
               )
            })}
         </ul>
         <div style={{ marginLeft: '20px' }} >
            <button onClick={() => props.onClickFilter('All')}>All</button>
            <button onClick={() => props.onClickFilter('Rubles')}>Rubles</button>
            <button onClick={() => props.onClickFilter('Dollars')}>Dollars</button>
         </div>
      </>
   )
}

export default CurrencyButton