import React, { useState, useEffect } from "react";
import "./Materi.css";

const Materi = () => {
    const [materials, setMaterials] = useState([]);
    const [modalMaterial, setModalMaterial] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("materials")) || [];
        setMaterials(data);
    }, []);

    const openModal = (m) => setModalMaterial(m);
    const closeModal = () => setModalMaterial(null);

    return (
        <div className="materi-page">
            <div className="jarak"></div>
            <h2>Materi Pembelajaran</h2>

            {materials.length === 0 ? (
                <p>Belum ada materi tersedia.</p>
            ) : (
                <div className="materi-list">
                    {materials.map((m) => (
                        <div className="materi-card" key={m.id} onClick={() => openModal(m)}>
                            <h4>{m.title}</h4>
                            <p>{m.content.length > 100 ? m.content.substring(0, 100) + "..." : m.content}</p>
                        </div>
                    ))}
                </div>
            )}

            {modalMaterial && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{modalMaterial.title}</h3>
                        <p>{modalMaterial.content}</p>
                        <button onClick={closeModal}>Tutup</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Materi;
