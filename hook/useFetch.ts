// import axios from 'axios';
import { useEffect, useState } from 'react';
import { dataTypes } from '../types/typesFile';

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<dataTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!endpoint) {
      setData([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://itunes.apple.com/lookup?amgArtistId=${endpoint}`
      );
      const jsonData = await response.json();
      setData(jsonData.results);
      console.log(jsonData.results);

      setIsLoading(false);
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
