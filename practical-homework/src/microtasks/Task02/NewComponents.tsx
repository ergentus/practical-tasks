import React from 'react'

export type StudentType = {
   id: number, 
   name: string, 
   age: number
}

type NewComponentsTypeProps = {
   students: StudentType[]
}

export const NewComponents = (props: NewComponentsTypeProps) => {
   return (
      <ul>
         {props.students.map((e) => {
            return (
               <li key={e.id}>
                  <span>{e.name}</span>
                  <span>{e.age}</span>
               </li>
            )
         })}
      </ul>
   )
}