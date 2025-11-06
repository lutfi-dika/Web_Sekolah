import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Gallery from "./component/Galery";
import Contact from "./component/Contact";
import Login from "./RegisLogin/Login";
import Register from "./RegisLogin/Register";
import LoadingSpinner from "./component/loading";
import AdminDashboard from "./Dashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/CardsLayout";
import Materi from "./Material/Materi";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  // Tambahkan admin default
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const adminExists = users.find(u => u.email === "admin@web.com");
    if (!adminExists) {
      users.push({ name: "Admin Default", email: "admin@web.com", password: "123456", role: "admin" });
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [page]);

  // Cek sesi login
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("userRole");
    if (loggedIn && role) {
      setUserRole(role);
      setPage(role === "admin" ? "admin" : "user");
    }
  }, []);

  // Login
  const handleLogin = (role) => {
    setUserRole(role);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userRole", role);
    setPage(role === "admin" ? "admin" : "user");
  };

  // Register
  const handleRegister = () => {
    setPage("login");
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    setUserRole(null);
    setPage("home");
  };

  // Fungsi pindah ke Materi
  const handleOpenMateri = () => {
    setPage("materi");
  };

  return (
    <>
      <Navbar setPage={setPage} onLogout={handleLogout} userRole={userRole} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="main-content">
          {page === "home" && <Home />}
          {page === "contact" && <Contact />}
          {page === "gallery" && <Gallery />}

          {page === "login" && <Login onLogin={handleLogin} onGoRegister={() => setPage("register")} />}
          {page === "register" && <Register onGoLogin={handleRegister} />}

          {page === "admin" && userRole === "admin" && <AdminDashboard onLogout={handleLogout} />}
          {page === "user" && userRole === "user" && <UserDashboard openMateri={handleOpenMateri} />}

          {page === "materi" && userRole === "user" && <Materi />}
        </div>
      )}
    </>
  );
}

export default App;
