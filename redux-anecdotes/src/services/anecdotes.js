import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    }
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const anecdote = asObject(content)
    const res = await axios.post(baseUrl, anecdote)
    return res.data
}

const vote = async (id) => {
    const getAnecdote = await axios.get(`${baseUrl}/${id}`)
    let anecdote = getAnecdote.data
    anecdote.votes += 1

    const res = await axios.put(`${baseUrl}/${id}`, anecdote)
    return res.data 
}

export default { getAll , createNew, vote}
