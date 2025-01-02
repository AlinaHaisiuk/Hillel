import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingComponent = ({ id }: { id: number }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Завантаження даних...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Отримані дані:</h1>
      <ul>
        <li>{data?.title}</li>
        <li>{data?.body}</li>
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
