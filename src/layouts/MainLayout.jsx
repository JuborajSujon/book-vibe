import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="h-20">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
