import { useEffect } from "react";
import { useWorker } from "@/hooks";

function Contact() {
  const { data, postMessage } = useWorker("sharedWorker.js");

  function handleClick() {
    postMessage("Contact.tsx");
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}>Post message</button>
    </div>
  );
}

export default Contact;
