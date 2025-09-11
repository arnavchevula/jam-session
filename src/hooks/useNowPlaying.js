import { useState, useEffect } from "react";
import axios from "axios";
const useNowPlaying = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMusicians = async () => {
      try {
        const response = await axios.get("http://localhost:3000/musicians");
        setData(
          response.data.filter(musician => {
            return musician.status === "Playing";
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    getMusicians().catch(console.error);
  }, []);
  return [data, setData];
};

export default useNowPlaying;
