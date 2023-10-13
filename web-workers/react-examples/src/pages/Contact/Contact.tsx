import { useWorker } from "@/hooks";

function Contact() {
  const { worker } = useWorker();

  worker.onmessage = (event) => {
    console.log("Message received from worker", event);
  };

  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
