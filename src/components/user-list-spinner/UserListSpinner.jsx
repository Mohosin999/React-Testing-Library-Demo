import React, { useEffect, useState } from "react";
import axios from "axios";

const UserListSpinner = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <div>User Id: {user.id}</div>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserListSpinner;
