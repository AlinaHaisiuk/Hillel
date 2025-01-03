import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, removeItem } from "../store/slices/itemsSlice";
import { RootState, AppDispatch } from "../store";

const ItemList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, status, error } = useSelector(
    (state: RootState) => state.items
  );

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
