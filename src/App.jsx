import React from 'react'
import './App.css'
import Task from './components/Task.jsx'
export default function App() {
  return (
    <div className='app'>
      <Task />
      <main className='body-main'>
        <section className='task-col'>Section 1</section>
        <section className='task-col'>Section 2 </section>
        <section className='task-col'>Section 3</section>
      </main>
    </div>
  )
}
