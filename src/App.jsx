import React from 'react'
import './App.css'
import Task from './components/Task.jsx'
import TaskColumn from './components/TaskColumn.jsx'
import Todo from "../src/assets/direct-hit.png";
import doing from '../src/assets/glowing-star.png'
import done from '../src/assets/check-mark-button.png'

export default function App() {
  return (
    <div className='app'>
      <Task />
      <main className='body-main '>
        <TaskColumn title ="Todo" icon ={Todo}/>
         <TaskColumn title ="Doing" icon={doing}/>
         <TaskColumn title ="Done" icon={done}/>
      </main>
    </div>
  )
}
