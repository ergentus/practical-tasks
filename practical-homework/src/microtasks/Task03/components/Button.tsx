import React from 'react'

type ButtonTypeProps = {
   title: string
   callBack: () => void
}

export const Button = (props: ButtonTypeProps) => {

   return (
      <>
         <button onClick={props.callBack}>{props.title}</button>
      </>
   )
}

