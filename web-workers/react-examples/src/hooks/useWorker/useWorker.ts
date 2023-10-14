import { useEffect, useRef, useState } from "react";

type WorkerState<T> = {
  data?: T;
  error?: MessageEvent;
};

function useWorker<T>(filePath: string | URL) {
  const sharedWorker = useRef(new SharedWorker(filePath, { type: "module" }));
  const [state, setState] = useState<WorkerState<T>>({});

  function postMessage(data: unknown) {
    sharedWorker.current.port.postMessage(data);
  }

  useEffect(() => {
    const worker = sharedWorker.current;

    function messageHandler(event: MessageEvent) {
      setState((prevState) => ({
        ...prevState,
        data: event.data,
        error: undefined,
      }));
    }

    function errorHandler(event: MessageEvent) {
      setState((prevState) => ({ ...prevState, error: event }));
    }

    worker.port.addEventListener("message", messageHandler);
    worker.port.addEventListener("messageerror", errorHandler);
    worker.port.start();

    return () => {
      worker.port.removeEventListener("message", messageHandler);
      worker.port.removeEventListener("messageerror", errorHandler);
      worker.port.close();
    };
  }, []);

  return {
    ...state,
    postMessage,
  };
}

export default useWorker;
