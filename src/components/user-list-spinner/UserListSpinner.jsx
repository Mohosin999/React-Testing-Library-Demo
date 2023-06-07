import React, { useEffect, useState } from "react";
import axios from "axios";

const UserListSpinner = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Spinner Loading...</p>}
      {error && <p>{error}</p>}
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
