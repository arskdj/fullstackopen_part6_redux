import React, {useState} from "react"

const NewAnecdote = () => {
    return(
        <div>
            <h2>create new</h2>
            <form>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default NewAnecdote
