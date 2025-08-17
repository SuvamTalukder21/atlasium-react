import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const handleButtonToggle = () => setShowMenu(!showMenu);

    // Reset menu state when route changes
    useEffect(() => {
        setShowMenu(false);
    }, [location.pathname]);

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <NavLink to="/">
                            {/* <h1>
                                <span className="logo">Where in the world?</span>
                                <span className="logo-subtitle">Explore the world</span>
                            </h1> */}
                            <h1>Atlasium</h1>
                        </NavLink>
                    </div>

                    <nav className={`nav-links ${showMenu ? "menu-mobile" : "menu-web"}`}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                {/* <NavLink to="/" onClick={goToAbout}>About</NavLink> */}
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/country">Country</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button type="button" onClick={handleButtonToggle} className="btn ham-btn">
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}