import React from 'react'

type MoneyType = {
   banknotes: string
   value: number
   number: string
}

type CurrencyButtonTypeProps = {
   data: MoneyType[]
   callBack: () => void
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
            <button onClick={props.callBack}>All</button>
            <button onClick={props.callBack}>Rubles</button>
            <button onClick={props.callBack}>Dollars</button>
         </div>
      </>

   )
}

export default CurrencyButton