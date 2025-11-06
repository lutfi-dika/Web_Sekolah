// src/components/Konsentrasi.jsx
import React from "react";
import "./Kosentrasi.css"; // CSS dari langkah 2
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Konsentrasi = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="konsentrasi" className="konsentrasi-section">
            <div className="container">
                <h2 className="section-title">KONSENTRASI KEAHLIAN DI TELESANDI</h2>
                <div className="title-underline"></div>
                <div className="grid-container">

                    {/* === RPL === */}
                    <div className="keahlian-card" data-aos="fade-up">
                        <div className="icon-wrapper">
                            <img
                                src="https://i.pinimg.com/736x/91/ed/33/91ed339ce59e5f654616ae0ecb7677cf.jpg"
                                alt="RPL Icon"
                                className="card-icon"
                            />
                        </div>
                        <h3 className="card-title">Rekayasa Perangkat Lunak</h3>
                        <div className="card-content">
                            <p className="content-subtitle">Studi</p>
                            <ul className="content-list">
                                <li>Perancangan Sistem</li>
                                <li>Database</li>
                                <li>Pemrograman Berorientasi Objek</li>
                                <li>Pemrograman Web dan Mobile</li>
                            </ul>
                        </div>
                    </div>

                    {/* === TKJ === */}
                    <div className="keahlian-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon-wrapper">
                            <img
                                src="https://i.pinimg.com/736x/62/23/68/6223685fce58ccf21e9ec6302377eb67.jpg"
                                alt="TKJ Icon"
                                className="card-icon"
                            />
                        </div>
                        <h3 className="card-title">Teknik Komputer dan Jaringan</h3>
                        <div className="card-content">
                            <p className="content-subtitle">Studi</p>
                            <ul className="content-list">
                                <li>Teknologi Jaringan Berbasis Luas</li>
                                <li>Administrasi Infrastruktur Jaringan</li>
                                <li>Administrasi Sistem Jaringan</li>
                                <li>Teknologi Layanan Jaringan</li>
                                <li>Troubleshooting Jaringan</li>
                                <li>Keamanan Jaringan</li>
                            </ul>
                        </div>
                    </div>

                    {/* === DKV === */}
                    <div className="keahlian-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon-wrapper">
                            <img
                                src="https://i.pinimg.com/736x/81/e5/76/81e576777c288f5e0584e439cb6759af.jpg"
                                alt="DKV Icon"
                                className="card-icon"
                            />
                        </div>
                        <h3 className="card-title">Desain Komunikasi Visual</h3>
                        <div className="card-content">
                            <p className="content-subtitle">Studi</p>
                            <ul className="content-list">
                                <li>Desain Grafis dan Ilustrasi</li>
                                <li>Penggunaan Software Desain</li>
                                <li>Fotografi dan Videografi</li>
                                <li>Desain Media Cetak dan Web</li>
                                <li>Proyek Kreatif dan Kewirausahaan</li>
                            </ul>
                        </div>
                    </div>

                    {/* === TTT === */}
                    <div className="keahlian-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-wrapper">
                            <img
                                src="https://i.pinimg.com/736x/8b/d8/a6/8bd8a6076b12927ef2c8644a40442b5a.jpg"
                                alt="Transmisi Icon"
                                className="card-icon"
                            />
                        </div>
                        <h3 className="card-title">Teknik Transmisi Telekomunikasi</h3>
                        <div className="card-content">
                            <p className="content-subtitle">Studi</p>
                            <ul className="content-list">
                                <li>Dasar Sistem Telekomunikasi</li>
                                <li>Elektronika dan Microcontroller</li>
                                <li>Transmisi Satelit (VSAT/IP)</li>
                                <li>Transmisi Radio (BTS)</li>
                                <li>Transmisi Fiber Optic (FTTH)</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Konsentrasi;
