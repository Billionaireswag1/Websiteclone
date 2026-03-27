
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-inner">
    {/* LEFT (Search bar) */}

    <div className="search-container">
     <FaSearch className="search-icon" />

<input type='search' placeholder="Search 12,400+news articles, tutorials and books"/>
      </div>
      </div>
      
</nav>
);
};

export default Navbar;