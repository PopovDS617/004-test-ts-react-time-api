import { useCallback, useEffect, useState } from 'react';

export const useAsync = <T>(
  callback: () => Promise<T>,
  dependencies: [] | unknown[]
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState<T | null>(null);

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(false);
    setValue(null);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    const interval = setInterval(() => {
      callbackMemoized();
    }, 1000);
    return () => clearInterval(interval);
  }, [callbackMemoized]);

  return { loading, error, value };
};
