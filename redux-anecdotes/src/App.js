import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'

const App = () => {

  return (
    <div>
        <NewAnecdote/>
        <AnecdoteList/>
    </div>
  )
}

export default App
