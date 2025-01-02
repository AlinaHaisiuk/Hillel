import React from "react";
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";
import DataFetchingComponent from "./DataFetchingComponent";

export const App = () => {
  return (
    <div>
      <h1>React Controlled and Uncontrolled Components</h1>
      <h2>Controlled Form</h2>
      <ControlledForm />
      <h2>Uncontrolled Form</h2>
      <UncontrolledForm />
      <h2>Data Fetching Example</h2>
      <DataFetchingComponent />
    </div>
  );
};
