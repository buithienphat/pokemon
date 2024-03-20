import axios from "axios";
import { useEffect, useState } from "react";

export const useQuery = (url: string | "") => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res: any = await axios.get(url);
      setData(res.data || []);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};
