import React from "react";
import "./Navbar.css";

const Navbar = ({ setPage, onLogout, userRole }) => {
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

            {/* 🔹 Navigasi Utama */}
            <ul className="navbar-links">
                <li>
                    <a
                        href="#beranda"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            setPage("home");
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
                        }}
                    >
                        Kontak
                    </a>
                </li>

                {/* 🔹 Dashboard muncul sesuai role */}
                {userRole === "admin" && (
                    <li>
                        <a
                            href="#admin"
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage("admin");
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
                            }}
                        >
                            Dashboard User
                        </a>
                    </li>
                )}
            </ul>

            {/* 🔹 Tombol Aksi */}
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
