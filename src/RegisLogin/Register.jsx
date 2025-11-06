import React, { useState } from "react";
import "./Register.css";

const Register = ({ onGoLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // default: user biasa

    const handleRegister = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // cek kalau email sudah terdaftar
        const isExist = users.some((u) => u.email === email);
        if (isExist) {
            alert("Email sudah terdaftar! Silakan login.");
            return;
        }

        const newUser = { name, email, password, role };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registrasi berhasil! Silakan login.");
        onGoLogin(); // pindah ke halaman login
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2 className="form-title">Buat Akun Baru</h2>

                <label htmlFor="name">Nama Lengkap</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nama kamu"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email aktif"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Kata Sandi</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="role">Daftar sebagai</label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="select-role"
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <button type="submit" className="submit-button">
                    Daftar
                </button>

                <div className="register-link">
                    Sudah punya akun?{" "}
                    <span onClick={onGoLogin}>Masuk di sini</span>
                </div>
            </form>
        </div>
    );
};

export default Register;
