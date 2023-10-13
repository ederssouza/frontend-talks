// https://www.sitepoint.com/developing-faster-javascript-apps-the-ultimate-guide-to-web-workers/
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { WorkerProvider } from "./providers";

function App() {
  return (
    <BrowserRouter>
      <WorkerProvider>
        <Router />
      </WorkerProvider>
    </BrowserRouter>
  );
}

export default App;
