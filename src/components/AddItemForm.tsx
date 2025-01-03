import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/itemsSlice";

const AddItemForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = { id: Date.now(), title };
    dispatch(addItem(newItem));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItemForm;
