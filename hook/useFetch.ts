import axios from 'axios';
import { useEffect, useState } from 'react';

export type dataTypes = {
  artistId: string;
  artistName: string;
  artworkUrl100: string;
  artistViewUrl: string;
};

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
    // &entity=musicArtist&limit=5&country=fr&sort=recent
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${endpoint}&entity=musicTrack&limit=5&sort=recent`
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

  // const refetch = () => {
  //   setIsLoading(true);
  //   fetchData();
  // };

  return { data, isLoading, error };
};

export default useFetch;
