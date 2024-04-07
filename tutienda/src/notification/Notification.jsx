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
        <h1 style={{display:'flex', justifyContent:"center"}}>{notificationData.type}</h1>
        <h3 style={{display:'flex', justifyContent:"center"}}>{notificationData.text}</h3>
      </article>
    )
}

export default Notification