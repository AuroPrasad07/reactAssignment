import React from 'react'
import './App.css'
import Teacher from './components/Teacher/Teacher'
import Main from './components/Main/Main'
import Assignment from './components/Assignment/Assignment'

function App() {
  return (
    <div className='bg-purple'>
      <Teacher/>
      <Main/>
      <Assignment/>
    </div>
  )
}

export default App
