// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UserList = () => {
//   const [user, setUser] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get("https://api.example.com/users");
//         setUser(response.data);
//         setError("");
//       } catch (error) {
//         setError("Error fetching user data");
//         setUser([]);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       {user && (
//         <table>
//           <thead>
//             <tr>
//               <th>User Id</th>
//               <th>Name</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user.map((userData) => (
//               <tr key={userData.id}>
//                 <td>{userData.id}</td>
//                 <td>{userData.name}</td>
//                 <td>{userData.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError("Error fetching user data");
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {/* <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
