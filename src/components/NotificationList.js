const NotificationList = ({
  notifications
}) => {

  return (

    <div>

      {
        notifications.map((item, index) => (

          <div
            key={index}

            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px"
            }}
          >

            <h3>{item.Type}</h3>

            <p>{item.Message}</p>

            <small>{item.Timestamp}</small>

          </div>
        ))
      }

    </div>
  );
};

export default NotificationList;