import { useWorker } from "@/hooks";

function Home() {
  const { worker } = useWorker();

  function handlePostMessage() {
    worker.postMessage("test message");
    console.log("Message posted to worker");
  }

  worker.onmessage = (event) => {
    console.log("Message received from worker", event);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handlePostMessage}>Post message</button>
    </div>
  );
}

export default Home;
