import { Link, useLocation } from "react-router-dom";
import { FiHome, FiMail, FiClock } from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="logo">SmartEmail</h2>

      <nav className="menu">
        <Link
          to="/dashboard"
          className={`menu-item ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          <FiHome />
          Dashboard
        </Link>

        <Link
          to="/historico"
          className={`menu-item ${
            location.pathname === "/historico" ? "active" : ""
          }`}
        >
          <FiClock />
          Histórico
        </Link>

        <Link
          to="/"
          className={`menu-item ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <FiMail />
          Enviar Email
        </Link>
      </nav>
    </aside>
  );
}
