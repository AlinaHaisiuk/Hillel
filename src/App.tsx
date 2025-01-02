import React, { useState } from "react";
import DataFetchingComponent from "./DataFetchingComponent";

const App = () => {
  const [id, setId] = useState<number>(1);

  const handleNextPost = () => {
    setId(id + 1);
  };

  return (
    <div>
      <h1>Асинхронне завантаження даних</h1>
      <button onClick={handleNextPost}>Наступний пост</button>
      <DataFetchingComponent id={id} />
    </div>
  );
};

export default App;
