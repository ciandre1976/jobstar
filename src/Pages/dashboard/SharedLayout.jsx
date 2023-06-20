import { Outlet } from "react-router-dom";
import { Navbar, Smallsidebar, BigSidebar } from "../../comps";
import Wrapper from "../../assets/wrappers/SharedLayout.js";

export default function SharedLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <Smallsidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
