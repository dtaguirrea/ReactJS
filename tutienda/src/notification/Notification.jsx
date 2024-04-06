const Notification = ( {notificationData}) => {
  
  const colors = {
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'blue'
  }
  
  const notificationStyle = {
      position: 'absolute',
      top: 100,
      right: 30,
      backgroundColor: colors[notificationData.type],
      color: 'white',
      padding: 20,
      borderRadius: 10
    }
    return (
      <article style={notificationStyle}>
        <h1>{notificationData.type}</h1>
        {notificationData.text}
      </article>
    )
}

export default Notification