// https://www.sitepoint.com/developing-faster-javascript-apps-the-ultimate-guide-to-web-workers/
// https://www.youtube.com/watch?v=-wXPxJYhZeI&ab_channel=ErickWendel
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
