import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Button from "../components/Button";

const MainLayout = () => {
  return (
    <div>
      <div className="h-20 py-4">
        <Nav />
      </div>
      <Button />
      <Outlet />
    </div>
  );
};

export default MainLayout;
