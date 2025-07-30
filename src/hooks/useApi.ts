import { API_URL } from "@/constants/api";
import { useEffect, useState, useCallback } from "react";

const useApi = <T = unknown>(
  url: string,
  skip = false,
  lastUpdated?: (date: string) => void
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchApi = useCallback(() => {
    setLoading(true);
    setError(null);
    fetch(API_URL + url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json: T) => {
        setLoading(false);
        setData(json);
        lastUpdated?.(
          new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        );
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
        setError(err.message || "An error occurred while fetching data");
      });
  }, [url, lastUpdated]);

  useEffect(() => {
    if (!skip) {
      fetchApi();
    }
  }, [fetchApi, skip]);

  return { loading, data, error };
};

export default useApi;
