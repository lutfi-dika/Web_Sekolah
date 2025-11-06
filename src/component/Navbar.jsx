import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setPage, onLogout, userRole }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* 🔹 Logo */}
            <div className="navbar-logo">
                <a
                    href="#home"
                    className="logo-link"
                    onClick={(e) => {
                        e.preventDefault();
                        setPage("home");
                    }}
                >
                    SMK TELESANDI
                </a>
            </div>

            {/* 🔹 Tombol Hamburger */}
            <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* 🔹 Navigasi Utama */}
            <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <a
                        href="#beranda"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            setPage("home");
                            setMenuOpen(false);
                        }}
                    >
                        Beranda
                    </a>
                </li>
                <li>
                    <a href="#tentang" className="nav-link">
                        Tentang Kami
                    </a>
                </li>
                <li>
                    <a href="#galeri" className="nav-link">
                        Galeri
                    </a>
                </li>
                <li>
                    <a href="#konsentrasi" className="nav-link">
                        Konsentrasi
                    </a>
                </li>
                <li>
                    <a
                        href="#kontak"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            setPage("contact");
                            setMenuOpen(false);
                        }}
                    >
                        Kontak
                    </a>
                </li>

                {/* 🔹 Dashboard sesuai role */}
                {userRole === "admin" && (
                    <li>
                        <a
                            href="#admin"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage("admin");
                                setMenuOpen(false);
                            }}
                        >
                            Dashboard Admin
                        </a>
                    </li>
                )}

                {userRole === "user" && (
                    <li>
                        <a
                            href="#user"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage("user");
                                setMenuOpen(false);
                            }}
                        >
                            Dashboard User
                        </a>
                    </li>
                )}

                {/* 🔹 Tombol Aksi di versi mobile */}
                <li className="mobile-actions">
                    {!userRole ? (
                        <>
                            <button className="login-button" onClick={() => setPage("login")}>
                                Login
                            </button>
                            <button
                                className="cta-button"
                                onClick={() => setPage("register")}
                            >
                                Mulai Sekarang
                            </button>
                        </>
                    ) : (
                        <button className="cta-button logout" onClick={onLogout}>
                            Logout
                        </button>
                    )}
                </li>
            </ul>

            {/* 🔹 Tombol Aksi (desktop) */}
            <div className="navbar-actions">
                {!userRole ? (
                    <>
                        <button className="login-button" onClick={() => setPage("login")}>
                            Login
                        </button>
                        <button className="cta-button" onClick={() => setPage("register")}>
                            Mulai Sekarang
                        </button>
                    </>
                ) : (
                    <button className="cta-button logout" onClick={onLogout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
