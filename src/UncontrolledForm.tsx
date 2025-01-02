import React, { useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      alert(`Form submitted with value: ${inputRef.current.value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Input:</label>
      <input type="text" id="inputField" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
