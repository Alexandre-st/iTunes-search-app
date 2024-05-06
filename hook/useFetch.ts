import axios from "axios";
import { useEffect, useState } from "react";

// // const { RAPID_API_KEY } = "@env";

// // const rapidApiKey = RAPID_API_KEY;
// // const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;

// // console.log(process.env.REACT_APP_RAPID_API_KEY);

// // const key = "8ed0a72786msha0aaaa5095ab43ap1b6f49jsn80edfe1e6762";

// const useFetch = (endpoint, query) => {
const useFetch = () => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://itunes.apple.com/search?`,
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
    // params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.request(options);
      // setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      // setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
