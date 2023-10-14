import { useEffect } from "react";
import { useWorker } from "@/hooks";

function Home() {
  const { data, postMessage } = useWorker("sharedWorker.js");

  function handleClick() {
    postMessage("Home.tsx");
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Post message</button>
    </div>
  );
}

export default Home;
