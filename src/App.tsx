import React from "react";
import StatefulCounter from "./StatefulCounter";
import StatelessMessage from "./StatelessMessage";
import ClassCounter from "./ClassCounter";

export const App = () => {
  return (
    <div className="App">
      <h1>React Components</h1>
      <StatefulCounter />
      <StatelessMessage message="Hello, World!" />
      <ClassCounter />
    </div>
  );
};
