import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://api.example.com/users");
        setUser(response.data);
        setError(null);
      } catch (error) {
        setError("Error fetching user data");
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {user && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userData) => (
              <tr key={userData.id}>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
                <td>{userData.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
