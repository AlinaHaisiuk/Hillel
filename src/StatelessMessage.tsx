import React from "react";

interface StatelessProps {
  message: string;
}

const StatelessMessage: React.FC<StatelessProps> = ({ message }) => {
  return <h2>{message}</h2>;
};

export default StatelessMessage;
