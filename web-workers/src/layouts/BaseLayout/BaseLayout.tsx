import { Outlet } from "react-router-dom";
import { Menu } from "@/components";

function BaseLayout() {
  return (
    <main>
      <Menu />
      <Outlet />
    </main>
  );
}

export default BaseLayout;
