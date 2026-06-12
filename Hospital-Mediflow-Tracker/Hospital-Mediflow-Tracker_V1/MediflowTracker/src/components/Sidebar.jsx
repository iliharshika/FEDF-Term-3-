import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBed,
  FaUsers,
  FaBell,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        <h2>🏥 MediFlow</h2>
      </div>

      <div className="sidebar-menu">

        <Link to="/doctor" className="menu-item">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>

        <Link to="#" className="menu-item">
          <FaUsers />
          <span>Patients</span>
        </Link>

        <Link to="#" className="menu-item">
          <FaBed />
          <span>Beds</span>
        </Link>

        <Link to="#" className="menu-item">
          <FaBell />
          <span>Alerts</span>
        </Link>

      </div>

      <div className="sidebar-footer">
        <Link to="/" className="menu-item logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </div>

    </div>
  );
}

export default Sidebar;