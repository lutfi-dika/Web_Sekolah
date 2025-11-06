import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

const AdminDashboard = ({ onLogout }) => {
    const [users, setUsers] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    useEffect(() => {
        const usersData = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(usersData);

        const materialsData = JSON.parse(localStorage.getItem("materials")) || [];
        setMaterials(materialsData);
    }, []);

    // Tambah materi baru
    const handleAddMaterial = (e) => {
        e.preventDefault();
        if (!newTitle || !newContent) return alert("Judul dan konten harus diisi!");

        const newMaterial = {
            id: Date.now(),
            title: newTitle,
            content: newContent,
        };

        const updatedMaterials = [...materials, newMaterial];
        setMaterials(updatedMaterials);
        localStorage.setItem("materials", JSON.stringify(updatedMaterials));

        setNewTitle("");
        setNewContent("");
        alert("Materi berhasil ditambahkan!");
    };

    return (
        <div className="admin-dashboard">
            <div className="jarak-nav"></div>
            <header className="admin-header">
                <h1>Dashboard Admin</h1>
            </header>

            <section className="admin-stats">
                <div className="stat-card">
                    <h3>Total Pengguna</h3>
                    <p>{users.length}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Materi</h3>
                    <p>{materials.length}</p>
                </div>
            </section>

            {/* Form Tambah Materi */}
            <section className="admin-add-material">
                <h2>Tambah Materi Baru</h2>
                <form onSubmit={handleAddMaterial}>
                    <input
                        type="text"
                        placeholder="Judul Materi"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Isi Materi"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    ></textarea>
                    <button type="submit">Tambah Materi</button>
                </form>
            </section>

            {/* Daftar Materi */}
            <section className="admin-material-list">
                <h2>Daftar Materi</h2>
                {materials.length === 0 ? (
                    <p>Belum ada materi.</p>
                ) : (
                    <ul>
                        {materials.map((m) => (
                            <li key={m.id}>
                                <h4>{m.title}</h4>
                                <p>{m.content}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default AdminDashboard;
