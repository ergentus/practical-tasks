import React from 'react'

type ButtonTypeProps = {
   name: string
   callBack:() => void
}

export const Button = (props: ButtonTypeProps) => {

   return (
      <button onClick={props.callBack}>{props.name}</button>
   )
}

