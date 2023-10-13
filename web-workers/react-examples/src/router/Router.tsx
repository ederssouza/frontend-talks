import { Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "@/pages";
import { BaseLayout } from "@/layouts";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
