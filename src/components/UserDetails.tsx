import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/userReducer";

const UserDetails = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleAddUser = () => {
    if (name.trim()) {
      dispatch(addUser(name));
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
