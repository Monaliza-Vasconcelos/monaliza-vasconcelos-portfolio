import logo from "/logo.png";
import { Link } from "react-router-dom";
import lua from "../assets/lua.svg";
import sol from "../assets/sol.svg";
import { useEffect, useState } from "react";

function Header() {
    // estado inicial sem erro e sem flicker
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved === "light" ? "light" : "dark";
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    // aplica tema no HTML
    useEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <header className="header-container">
            <div className="logo">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>

            <nav className="nav">
                <ul className="ul-header">
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
                <div
                    className="lua"
                    onClick={toggleTheme}
                    style={{ cursor: "pointer" }}
                >
                    <img
                        className="lua-img"
                        src={theme === "dark" ? lua : sol}
                        alt="Tema"
                    />
                </div>
            </nav>


        </header>
    );
}

export default Header;