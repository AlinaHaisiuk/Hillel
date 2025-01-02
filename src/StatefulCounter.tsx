import React, { useState } from "react";

const StatefulCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Stateful Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StatefulCounter;
