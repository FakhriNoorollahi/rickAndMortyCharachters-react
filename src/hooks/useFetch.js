import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = "https://rickandmortyapi.com/api";

export function useFetch(params) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getFetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${BASE_URL}/${params}`, signal);
        setData(data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    if (params) {
      getFetchData();
    }

    return () => {
      controller.abort();
    };
  }, [params]);

  return { isLoading, data };
}
