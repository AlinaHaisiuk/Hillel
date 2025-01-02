import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const UserDetails = () => {
  const { addUser } = useUserContext();
  const [name, setName] = useState("");

  const handleAddUser = () => {
    if (name.trim()) {
      addUser(name);
      setName("");
    }
  };

  return (
    <div>
      <h2>Add user</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAddUser}>Add user</button>
    </div>
  );
};

export default UserDetails;
