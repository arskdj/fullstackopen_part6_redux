import React, {useState} from "react"
import {vote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const voteHandler = (id) => {
      dispatch(vote(id))
      const msg = `You voted ${anecdotes.find(a => a.id === id).content}`
      dispatch(setNotification(msg))
      setTimeout( () => dispatch(setNotification(null)), 5000)
  }


    return(
        <div>
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => voteHandler(anecdote.id)}>vote</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default AnecdoteList
