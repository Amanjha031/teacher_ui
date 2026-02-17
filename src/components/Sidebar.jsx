import { MdDashboard } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Shiksha.svg";
import "../styles/sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  /* CLOSE SIDEBAR FUNCTION */
  const closeSidebar = () => {
    document.body.classList.remove("sidebar-open");
  };

  return (
    <aside
      className="sidebar"
      onClick={(e) => e.stopPropagation()}   /* Prevent outside click close */
    >
      <div className="sidebar-logo">
        <img src={logo} alt="ShikshaCom" />
        <div>
          <h3>ShikshaCom</h3>
          <p>Empowerment Through Education</p>
        </div>
      </div>

      <nav>

        {/* Dashboard */}
        <div
          className="menu-item"
          onClick={() => {
            navigate("/teacher/dashboard");
            closeSidebar();     // 👈 CLOSE
          }}
        >
          <MdDashboard />
          <span>Dashboard</span>
        </div>

        {/* Classes */}
        <div
          className="menu-item"
          onClick={() => {
            navigate("/teacher/classes");
            closeSidebar();     // 👈 CLOSE
          }}
        >
          <FaChalkboardTeacher />
          <span>Classes</span>
        </div>

        {/* Submenu */}
        <div className="submenu">
          <p
            onClick={() => {
              navigate("/teacher/classes");
              closeSidebar();   // 👈 CLOSE
            }}
          >
            Math (Class 8) BY23
          </p>

          <p
            onClick={() => {
              navigate("/teacher/classes");
              closeSidebar();   // 👈 CLOSE
            }}
          >
            Math (Class 8) BY26
          </p>
        </div>

      </nav>
    </aside>
  );
}
