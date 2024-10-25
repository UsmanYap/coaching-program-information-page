import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useQueryState<T>(
  key: string,
  defaultValue?: T
): [T | null, Dispatch<SetStateAction<T | null>>] {
  const getQueryParam = (key: string): T | null => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramValue = searchParams.get(key);
    if (paramValue !== null) {
      if (typeof defaultValue === "string" || typeof paramValue === "string") {
        return paramValue as unknown as T;
      }
      try {
        return JSON.parse(paramValue) as T;
      } catch (err) {
        console.error(err);
        return null;
      }
    }
    return null;
  };

  const updateQueryParam = (key: string, value: T | null) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (value !== undefined && value !== null) {
      if (typeof value === "string") {
        searchParams.set(key, value as string);
      } else {
        searchParams.set(key, JSON.stringify(value));
      }
    } else {
      searchParams.delete(key);
    }
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  const [state, setState] = useState<T | null>(() => {
    const queryValue = getQueryParam(key);
    return queryValue !== null ? queryValue : defaultValue ?? null;
  });

  useEffect(() => {
    updateQueryParam(key, state);
  }, [key, state]);

  useEffect(() => {
    const queryValue = getQueryParam(key);
    if (queryValue !== null) {
      setState(queryValue);
    }
  }, [key]);

  return [state, setState];
}

export default useQueryState;
