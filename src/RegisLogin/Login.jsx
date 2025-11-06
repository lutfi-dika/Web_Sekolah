import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin, onGoRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // ✅ Admin bawaan (default)
        const adminAccount = {
            email: "admin@web.com",
            password: "12345",
            role: "admin",
        };

        // kalau cocok sama akun admin
        if (email === adminAccount.email && password === adminAccount.password) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userRole", "admin");
            alert("Login berhasil sebagai Admin!");
            onLogin("admin");
            return;
        }

        // ✅ kalau bukan admin → cek data user dari localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userRole", user.role);
            alert(`Login berhasil sebagai ${user.role}`);
            onLogin(user.role);
        } else {
            alert("Email atau password salah!");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="form-title">Masuk ke Akun</h2>

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email kamu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Kata Sandi</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" className="submit-button">
                    Masuk
                </button>

                <div className="register-link">
                    Belum punya akun?{" "}
                    <span onClick={onGoRegister}>Daftar di sini</span>
                </div>
            </form>
        </div>
    );
};

export default Login;
