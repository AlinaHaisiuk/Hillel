import React from "react";
import { useUserContext } from "../context/UserContext";

const UserList = () => {
  const { users } = useUserContext();

  return (
    <div>
      <h2>User list</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
