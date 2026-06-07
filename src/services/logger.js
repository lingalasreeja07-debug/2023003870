import axios from "axios";

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzbGluZ2FsYTVAZ2l0YW0uaW4iLCJleHAiOjE3ODA4MDkyODcsImlhdCI6MTc4MDgwODM4NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImE2NzA3NzhjLTY3OWYtNDA2ZS05MGJiLTA5ZGVlYWFjNTA3NiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImxpbmdhbGEgc3JlZWphIiwic3ViIjoiNDMzNWQwNTEtNWNkYS00NmE3LWFjM2UtOTQ1MmQ0NWRmNzc0In0sImVtYWlsIjoic2xpbmdhbGE1QGdpdGFtLmluIiwibmFtZSI6ImxpbmdhbGEgc3JlZWphIiwicm9sbE5vIjoiMjAyMzAwMzg3MCIsImFjY2Vzc0NvZGUiOiJ3Z0t0Z1oiLCJjbGllbnRJRCI6IjQzMzVkMDUxLTVjZGEtNDZhNy1hYzNlLTk0NTJkNDVkZjc3NCIsImNsaWVudFNlY3JldCI6ImpVVW1nZW1wR0hQdXJldnoifQ.IW51AvHzHvbvfNRmITpWCckLfAYGb6zCmyipd8BXSKw";

const Log = async (
  stack,
  level,
  packageName,
  message
) => {

  try {

    await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

  } catch (error) {

    console.log("Log Error", error);
  }
};

export default Log;