const message = 'default notification message'

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
        

        notify(message)
        setTimeout( () => notify(null), seconds * 1000)
    }
}

export default notificationReducer
