import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const UserList = () => {
  const users = useSelector((state: RootState) => state.user.users);

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
