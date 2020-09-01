const message = 'default notification message'

let tid = null

const notificationReducer = (state=message, action) => {
    switch (action.type){
        case 'SET_NOTIFICATION':
            return action.data.message
        default:
            return state
    } 
}

export const setNotification = (message, seconds) => {
    console.log('setNotification')
    return async (dispatch) => {

        const notify = (message) => {
            dispatch({
                type : 'SET_NOTIFICATION',
                data : {
                    message
                }
            })
        }

        const clear = () => {
            tid !== null && clearTimeout(tid)
            tid = setTimeout( () => {
                console.log('clearing tid', tid)
                notify(null)  
                tid = null
            }, seconds * 1000)
        }

        notify(message)
        clear()
    }
}

export default notificationReducer
