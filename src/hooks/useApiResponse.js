import axios from "axios";
import { useEffect, useState } from "react";

const useApiResponse = (endPoint) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      try {
        const { data } = await axios.get(`https://plankdesign.com/wp-json/plank/v1/fed-test/${endPoint}`);
        const responseArr = data[endPoint];
        setResponse([...responseArr]);
      } catch (error) {
        console.log(error);
      }
    };

    getResponse();
  }, []);

  return response;
}

export default useApiResponse;