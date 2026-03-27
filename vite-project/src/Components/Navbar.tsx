import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/fcc_primary_large.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search 12,400+ news articles, tutorials and books"
            />
          </div>
        </div>

        <div className="navbar-center">
          <img src={logo} alt="freeCodeCamp logo" />
        </div>

        <div className="navbar-right">
          <button className="icon-button" aria-label="language">
            🌐
          </button>

          <button className="menu-button">
            Menu
          </button>

          <button className="icon-button" aria-label="profile">
            👤
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;