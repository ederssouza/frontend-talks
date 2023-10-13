import { WorkerContext } from "@/contexts";

type Props = {
  children: React.ReactNode;
};

function WorkerProvider(props: Props) {
  const { children } = props;

  const worker = new Worker("worker.js");

  return (
    <WorkerContext.Provider value={{ worker }}>
      {children}
    </WorkerContext.Provider>
  );
}

export default WorkerProvider;
