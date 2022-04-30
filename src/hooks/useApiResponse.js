import axios from "axios";
import { useEffect, useState } from "react";

const useApiResponse = (property) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      try {
        const { data } = await axios.get(`https://plankdesign.com/wp-json/plank/v1/fed-test/${property}`);
        const responseArr = data[property];
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