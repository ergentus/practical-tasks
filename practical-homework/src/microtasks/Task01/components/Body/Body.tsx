import React from 'react'

type Props = {
   title: string
}

const Body = (props: Props) => {
   return (
      <div>{props.title}</div>
   )
}

export default Body