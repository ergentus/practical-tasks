import React from 'react'

type MoneyType = {
   banknotes: string 
   value: number 
   number: string
}

type CurrencyButtonTypeProps = {
   data: MoneyType[]
   title: string
   callBack:() => void
}

const CurrencyButton = (props: CurrencyButtonTypeProps) => {
   return (
      <button style={{ marginLeft: '20px' }} onClick={props.callBack}>{props.title}</button>
   )
}

export default CurrencyButton