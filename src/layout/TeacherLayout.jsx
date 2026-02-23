import { Outlet, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./layout.css";

export default function TeacherLayout() {
  const navigate = useNavigate();

  const closeSidebar = () => {
    document.body.classList.remove("sidebar-open");
  };

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      // Sirf left edge swipe pe back hoga Android/iOS style
      if (eventData.initial[0] < 40) {
        navigate(-1);
      }
    },
    delta: 80, // minimum swipe distance
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <div
      className="teacher-layout"
      onClick={closeSidebar}
      {...handlers}
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