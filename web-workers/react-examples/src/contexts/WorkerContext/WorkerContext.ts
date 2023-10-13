import { createContext } from "react";

type Props = {
  worker: Worker;
};

const WorkerContext = createContext({} as Props);

export default WorkerContext;
