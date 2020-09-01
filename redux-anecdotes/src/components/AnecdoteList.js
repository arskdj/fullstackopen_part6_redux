import React, {useState, useEffect} from "react"
import {initAnecdotes, vote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import { connect, useSelector, useDispatch } from 'react-redux'

const AnecdoteList = ({anecdotes, filter, vote, setNotification}) => {

    const voteHandler = (id) => {
        vote(id)
        const msg = `You voted ${anecdotes.find(a => a.id === id).content}`
        setNotification(msg,5)
    }


    return(
        <div>
            {anecdotes.sort((a,b)=> b.votes - a.votes).map(anecdote =>
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

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    const filter = state.filter
    const anecdotes = !filter
        ? state.anecdotes
        : state.anecdotes.filter(a => 
            a.content.search(filter) + 1)

    return {
        filter,
        anecdotes
    }
}

const mapDispatchToProps = {
    setNotification,
    vote
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)
