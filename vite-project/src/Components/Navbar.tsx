import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/fcc_primary_large.svg";

/**
 * Navbar Component
 * ----------------
 * Displays the top navigation bar of the application.
 *
 * Structure:
 * - Left: Search input with icon
 * - Center: freeCodeCamp logo
 * - Right: Action buttons (language, menu, profile)
 *
 * The layout uses a 3-column structure to keep the logo centered
 * while aligning search to the left and actions to the right.
 */

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Inner container controls layout and spacing */}
      <div className="navbar-inner">
        {/* Left section: Search bar */}
        <div className="navbar-left">
          {/* Search container: aligns icon and input as one unit */}
          <div className="search-container">
                    <FaSearch className="search-icon" />
            {/* Search input field */}
            <input
              type="search"
              placeholder="Search 12,400+ news articles, tutorials and books"
            />
          </div>
        </div>
          {/* CENTER SECTION: Logo */}
        <div className="navbar-center">
          <img src={logo} alt="freeCodeCamp logo" />
        </div>
{/* RIGHT SECTION: Action buttons */}
        <div className="navbar-right">
          <button className="icon-button" aria-label="language">
            🌐
          </button>

          <button className="menu-button" aria-label="menu">
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