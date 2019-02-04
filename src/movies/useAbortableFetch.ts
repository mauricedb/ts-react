import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';

const useAbortableFetch = <T>(
  url: string
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  abort: () => void;
} => {
  type FetchState = {
    data: T | null;
    loading: number;
    error: null | Error;
    controller: AbortController | null;
  };

  const fetchData = (
    url: string,
    signal: AbortSignal,
    setState: Dispatch<SetStateAction<FetchState>>
  ) => {
    fetch(url, { signal })
      .then(rsp =>
        rsp.ok
          ? Promise.resolve(rsp)
          : Promise.reject({
              message: rsp.statusText,
              status: rsp.status
            })
      )
      .then(rsp => rsp.json())
      .then(data => {
        setState((oldState: FetchState) => ({
          ...oldState,
          data,
          loading: oldState.loading - 1
        }));
      })
      .catch((err: Error) => {
        const error = err.name !== 'AbortError' ? err : null;

        setState((oldState: FetchState) => ({
          ...oldState,
          error,
          loading: oldState.loading - 1
        }));
      });
  };

  const [state, setState] = useState<FetchState>({
    data: null,
    loading: 0,
    error: null,
    controller: null
  });

  const isMounted = useRef(false);
  useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setState((oldState: FetchState) => ({
      data: null,
      loading: oldState.loading + 1,
      error: null,
      controller
    }));

    fetchData(url, controller.signal, state => {
      if (isMounted.current) {
        setState(state);
      }
    });

    return () => controller.abort();
  }, [url]);

  return {
    data: state.data,
    loading: !!state.loading,
    error: state.error,
    abort: () => state.controller && state.controller.abort()
  };
};

export default useAbortableFetch;
