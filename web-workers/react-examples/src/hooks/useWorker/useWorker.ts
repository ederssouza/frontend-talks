import { WorkerContext } from "@/contexts";
import { useContext } from "react";

function useWorker() {
  const context = useContext(WorkerContext);

  if (!Object.keys(context).length) {
    throw new Error("useWorker must be used within a WorkerContext");
  }

  return context;
}

export default useWorker;
