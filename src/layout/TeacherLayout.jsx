import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./layout.css";

export default function TeacherLayout() {

  const closeSidebar = () => {
    document.body.classList.remove("sidebar-open");
  };

  return (
    <div
      className="teacher-layout"
      onClick={closeSidebar}  
    >
      <Sidebar />

      <div className="teacher-main">
        <Header />
        <main className="teacher-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
