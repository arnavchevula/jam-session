import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMusicians = async () => {
      const response = await axios.get("http://localhost:3000/musicians");
      setData(response.data);

      try {
        const response = await axios.get("http://localhost:3000/musicians");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMusicians().catch(console.error);
  }, []);
  return [data, setData];
};

export default useFetch;
