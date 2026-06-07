const PriorityInbox = ({
  notifications
}) => {

  const sorted = [...notifications];

  return (

    <div>

      <h2>Priority Inbox</h2>

      {
        sorted.slice(0, 5).map((item, index) => (

          <div
            key={index}

            style={{
              marginBottom: "10px"
            }}
          >

            <b>{item.Type}</b>
            {" - "}
            {item.Message}

          </div>
        ))
      }

    </div>
  );
};

export default PriorityInbox;