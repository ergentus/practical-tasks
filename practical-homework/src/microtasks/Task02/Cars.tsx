import React from 'react'
import s from './Cars.module.css'

export type CarsType = {
   manufacturer: string, 
   model: string
}

type CarsTypeProps = {
   top: CarsType[]
}

export const Cars = (props: CarsTypeProps) => {
   return (
      <table className={s.cars}>Cars
         {props.top.map((e, i) => {
            return (
               <tr>
                  <th>{i+1}</th>
                  <td>{e.manufacturer}</td>
                  <td>{e.model}</td>
               </tr>
            )
         })}
      </table>
   )
}
