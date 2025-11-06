import React from "react";
import { FaBookOpen, FaVideo, FaQuestionCircle, FaComments, FaChartLine } from "react-icons/fa";
import "./CardsLayout.css";

const CardsLayout = ({ openMateri }) => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Dashboard Pembelajaran</h2>
                <p>Temukan berbagai fitur menarik untuk mendukung proses belajar kamu!</p>
            </div>

            <div className="cards-grid">
                <div className="card large gradient-blue" onClick={openMateri}>
                    <FaBookOpen className="card-icon" />
                    <h3>Materi Pembelajaran</h3>
                    <p>Akses modul pelajaran lengkap dan mudah dipahami setiap hari.</p>
                </div>

                <div className="card large gradient-purple">
                    <FaVideo className="card-icon" />
                    <h3>Video Interaktif</h3>
                    <p>Tonton video pembelajaran menarik yang menjelaskan konsep lebih mudah.</p>
                </div>

                <div className="card medium gradient-green">
                    <FaQuestionCircle className="card-icon" />
                    <h3>Quiz Seru</h3>
                    <p>Uji kemampuanmu dengan soal-soal menarik.</p>
                </div>

                <div className="card medium gradient-orange">
                    <FaComments className="card-icon" />
                    <h3>Forum Diskusi</h3>
                    <p>Diskusikan ide dan pertanyaanmu dengan teman dan guru.</p>
                </div>

                <div className="card medium gradient-red">
                    <FaChartLine className="card-icon" />
                    <h3>Progress Belajar</h3>
                    <p>Pantau kemajuan belajarmu dari waktu ke waktu.</p>
                </div>
            </div>
        </div>
    );
};

export default CardsLayout;
