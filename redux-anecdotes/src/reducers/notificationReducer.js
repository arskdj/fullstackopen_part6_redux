const message = 'default notification message'

const notificationReducer = (state=message, action) => {
    switch (action.type){
        case 'SET_NOTIFICATION':
            return action.data.message
        default:
            return state
    } 
}

export const setNotification = (message) => {
    return {
        type : 'SET_NOTIFICATION',
        data : {
            message
        }
    } 
}

export default notificationReducer
