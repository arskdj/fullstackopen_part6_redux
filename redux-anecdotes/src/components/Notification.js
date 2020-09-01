import React from 'react'
import notificationReducer from '../reducers/notificationReducer'
import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
    const show = () => {
        return (
          <div style={style}>
            { notification }
          </div>
        )
    }

    return notification
        ? show()
        : null
}

export default Notification
