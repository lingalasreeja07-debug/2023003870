import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzbGluZ2FsYTVAZ2l0YW0uaW4iLCJleHAiOjE3ODA4MDkyODcsImlhdCI6MTc4MDgwODM4NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImE2NzA3NzhjLTY3OWYtNDA2ZS05MGJiLTA5ZGVlYWFjNTA3NiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImxpbmdhbGEgc3JlZWphIiwic3ViIjoiNDMzNWQwNTEtNWNkYS00NmE3LWFjM2UtOTQ1MmQ0NWRmNzc0In0sImVtYWlsIjoic2xpbmdhbGE1QGdpdGFtLmluIiwibmFtZSI6ImxpbmdhbGEgc3JlZWphIiwicm9sbE5vIjoiMjAyMzAwMzg3MCIsImFjY2Vzc0NvZGUiOiJ3Z0t0Z1oiLCJjbGllbnRJRCI6IjQzMzVkMDUxLTVjZGEtNDZhNy1hYzNlLTk0NTJkNDVkZjc3NCIsImNsaWVudFNlY3JldCI6ImpVVW1nZW1wR0hQdXJldnoifQ.IW51AvHzHvbvfNRmITpWCckLfAYGb6zCmyipd8BXSKw";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      params: {
        page,
        limit,
        notification_type: type,
      },
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error("API Error:", error);

    return [
      {
        ID: "1",
        Type: "Placement",
        Message: "Microsoft hiring drive",
        Timestamp: "2026-06-07 10:00:00",
      },
      {
        ID: "2",
        Type: "Result",
        Message: "Mid exam results published",
        Timestamp: "2026-06-07 09:30:00",
      },
      {
        ID: "3",
        Type: "Event",
        Message: "Tech fest tomorrow",
        Timestamp: "2026-06-07 08:00:00",
      },
    ];
  }
};
