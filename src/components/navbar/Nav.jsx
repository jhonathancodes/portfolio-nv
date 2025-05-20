    import { NavLink } from "react-router-dom";
    import { useState, useEffect } from "react";
    import { FaMoon, FaSun } from 'react-icons/fa';
    import logo from "../../assets/logo.png";
    import "./Nav.css";

    function Nav() {
        const [darkMode, setDarkMode] = useState(false);
        const [menuOpen, setMenuOpen] = useState(false);

        useEffect(() => {
            document.body.classList.toggle("dark-mode", darkMode);
        }, [darkMode]);

        return (
            <header className={`nav-header ${menuOpen ? "blurred" : ""}`}>
               

                {/* Menu Desktop */}
                <nav className="navbar-desktop">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/sobre">Sobre</NavLink>
                    <NavLink to="/projetos">Projetos</NavLink>
                </nav>

                {/* Botão Dark Mode */}
                <button
                    className={`dark-toggle ${darkMode ? "dark" : ""}`}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                {/* Botão Menu Mobile */}
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    Menu
                </button>

                {/* Menu Mobile */}
                <nav className={`navbar-mobile ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</NavLink>
                    <NavLink to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</NavLink>
                </nav>
            </header>
        );
    }

    export default Nav;
