import React from "react"; 
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Main">
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Experience">
                        Experience
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;