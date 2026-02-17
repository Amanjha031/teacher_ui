import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const location = useLocation();

  const openSidebar = (e) => {
    e.stopPropagation();
    document.body.classList.add("sidebar-open");
  };

  return (
    <header className="header">

      {/* Hamburger */}
      <button className="hamburgerBtn" onClick={openSidebar}>
        <FiMenu />
      </button>

      {/* Profile */}
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="profile-img"
      />

    </header>
  );
}
