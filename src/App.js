import React, { useEffect, useState } from "react";
import { fetchNotifications } from "./services/api";
import Log from "./services/logger";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [type, setType] = useState("");

  const loadNotifications = async () => {
    try {
      const data = await fetchNotifications(1, 10, type);

      setNotifications(data);

      await Log(
        "frontend",
        "info",
        "api",
        "Notifications loaded successfully"
      );
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "api",
        "Failed to load notifications"
      );
    }
  };

  useEffect(() => {
    loadNotifications();

    // eslint-disable-next-line
  }, [type]);

  const nextNotification = () => {
    if (currentIndex < notifications.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevNotification = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const current = notifications[currentIndex];

  return (
    <div className="app">
      <h1>Campus Notifications</h1>

      <div className="filters">
        <button onClick={() => setType("")}>
          All
        </button>

        <button onClick={() => setType("Placement")}>
          Placement
        </button>

        <button onClick={() => setType("Result")}>
          Result
        </button>

        <button onClick={() => setType("Event")}>
          Event
        </button>
      </div>

      <div className="priority-box">
        <h2>Notification Viewer</h2>

        {current && (
          <div className="card">
            <h3>{current.Message}</h3>

            <p>
              <strong>Type:</strong> {current.Type}
            </p>

            <small>{current.Timestamp}</small>
          </div>
        )}
      </div>

      <div className="pagination">
        <button
          disabled={currentIndex === 0}
          onClick={prevNotification}
        >
          Prev
        </button>

        <button
          disabled={currentIndex === notifications.length - 1}
          onClick={nextNotification}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;