import React, { useState } from "react";

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Form submitted with value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Input:</label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
