import React from 'react';

// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

type TasksType = {
   taskId: number
   title: string
   isDone: boolean
}

export type ObjectType = {
   title: string
   tasks: TasksType[]
   students: string[]
}

type TasksPropsType = {
   data: ObjectType
}


export const Tasks = (probs: TasksPropsType): JSX.Element => {
   return (
      <div className='main-list'>
         <h2>{probs.data.title}</h2>
         <div>
            <input />
            <button>Add</button>
         </div>
         <div>
            <ul>
               {probs.data.tasks.map((t) => {
                  return(
                     <li><input type="checkbox" checked={t.isDone}/><span>{t.title}</span></li>
                  )
               })}
            </ul>
            <h3>List of current students</h3>
            <ol>
               {probs.data.students.map((e) => <li>{e}</li>)}
            </ol>
         </div>
      </div>
   );
};
