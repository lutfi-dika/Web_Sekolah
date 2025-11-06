import React from 'react';
import './Home.css';
import Gallery from './Galery.jsx';
import Konsentrasi from './Kosentrasi.jsx'
import Footer from './Footer.jsx';

const Home = () => {
    return (
        <div className="home-page">
            {/* SECTION 1: BERANDA / HERO */}
            <div id="beranda" className="parallax-section hero-parallax">
                <div className="parallax-content">
                    <h2 className="main-title">Selamat Datang di SMK TELEKOMUNIKASI TELESANDI BEKASI</h2>
                    <p className="subtitle">We are not the best, but we want to be excellent</p>
                </div>
            </div>

            {/* SECTION 2: TENTANG KAMI */}
            <section id="tentang" className="tentang-section">
                <div className="tentang-container">
                    <h2 className="section-title">Sekolah Terbaik di Kota Anda</h2>
                    <div className="title-underline"></div>

                    <div className="content-grid">
                        <div className="image-column">
                            <img
                                className="content-image"
                                src="/src/component/naufal.jpg"
                                alt="Kegiatan Siswa"
                            />
                        </div>

                        <div className="text-column">
                            <h3 className="sub-title">Visi Kami</h3>
                            <p className="section-paragraph">
                                Menjadi sekolah yang bermutu dan unggul dalam ilmu pengetahuan dan
                                teknologi informasi berdasarkan iman dan taqwa, berkarakter
                                bangsa, serta berbudaya lingkungan.
                            </p>

                            <h3 className="sub-title">Misi Kami</h3>
                            <ul className="mission-list">
                                <li>Menyelenggarakan pendidikan di bidang teknologi telekomunikasi dan informasi</li>
                                <li>Mengembangkan kurikulum yang mendukung kebutuhan pengguna lulusan</li>
                                <li>Menciptakan suasana akademis yang dilandasi iman dan taqwa</li>
                                <li>Menghasilkan lulusan yang berkarakter bangsa dan berbudaya lingkungan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: GALERI */}
            <section id="galeri" className="galeri-section">
                <Gallery />
            </section>

            {/* SECTION 5: KONSENTRASI KEAHLIAN */}
            {/* ========= Pembelajaran =============== */}
            <section id="konsentrasi" className='konsentrasi-section'>
                <Konsentrasi />
            </section>


            {/* CTA + FOOTER */}
            <div className="parallax-section cta-parallax">
                <div className="parallax-content">
                    <h2 className="main-title-cta">Siap Memulai?</h2>
                    <div className='desc'>
                        <p className="subtitle">
                            Jangan lewatkan kesempatan membangun masa depan cerah bersama generasi berprestasi.
                        </p>
                    </div>
                    <button className="cta-button" onClick={() => setPage("register")}>
                        Mulai Sekarang
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
