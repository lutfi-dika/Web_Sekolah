import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand */}
                <div className="footer-brand">
                    <h2>SMK TELEKOMUNIKASI TELESANDI BEKASI</h2>
                    <div className="desc">
                        <p>
                            SMK Telekomunikasi Telesandi Bekasi membentuk generasi muda yang unggul, kreatif, dan siap bersaing di era digital melalui pendidikan berbasis teknologi dan inovasi.
                        </p>
                    </div>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="footer-links">
                    <h3>Navigasi</h3>
                    <ul>
                        <li><a href="#">Beranda</a></li>
                        <li><a href="#">Tentang Kami</a></li>
                        <li><a href="#">Program</a></li>
                        <li><a href="#">Kontak</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="footer-links">
                    <h3>Sumber Belajar</h3>
                    <ul>
                        <li><a href="#">Artikel</a></li>
                        <li><a href="#">Materi</a></li>
                        <li><a href="#">E-Book</a></li>
                        <li><a href="#">Video Pembelajaran</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-newsletter">
                    <h3>Langganan Berita</h3>
                    <p>Dapatkan update terbaru seputar dunia pendidikan dan teknologi.</p>
                    <form>
                        <input type="email" placeholder="Email Anda" />
                        <button type="submit">Kirim</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 <span>smk Telekomunikasi Telesandi Bekasi</span>. Semua hak dilindungi.
            </div>
        </footer>
    );
};

export default Footer;
