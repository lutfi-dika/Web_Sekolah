import React, { useState, useEffect } from 'react';
import './Galery.css'; // Perhatikan nama file CSS yang benar: Gallery.css

const galleryItems = [
    // Pastikan gambar-gambar ini memiliki resolusi yang lebar (landscape)
    { id: 1, src: 'https://lh3.googleusercontent.com/p/AF1QipOFoxvEbI3-olcyM1BNlFGrrzzynfPeA8z4sLO-=s1360-w1360-h1020-rw', title: 'Gedung Sekolah & Fasilitas Utama' },
    { id: 2, src: 'https://smktelekomunikasitelesandi.sch.id/public/storage/galeri/GTma8ztguE2XzBynG3HLx2AkEoKOdgz9SkV9EgGI.jpg', title: 'Kegiatan Kunjungan Industri Jurusan Rpl Dan Dkv' },
    { id: 3, src: 'https://smktelekomunikasitelesandi.sch.id/public/storage/galeri/keHsEhBaSmsyoyYw4pyT6OuJGbKN8Dk8QVNf3mm2.jpg', title: 'Interaksi Belajar Mengajar' },
    { id: 4, src: 'https://smktelekomunikasitelesandi.sch.id/public/storage/galeri/AEagxUIJvvQS0Ht1AQugOzYFio0Y0EYuyYAgkhUC.jpg', title: 'Kegiatan Ekstrakurikuler Tarung Derajat' },
    
];

const SLIDE_DURATION = 5000; // 5 detik

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Fungsi untuk Pindah ke Slide Sebelumnya
    const goToPrev = () => {
        setActiveIndex((currentIdx) => {
            return currentIdx === 0 ? galleryItems.length - 1 : currentIdx - 1;
        });
    };

    // Fungsi untuk Pindah ke Slide Selanjutnya
    const goToNext = () => {
        setActiveIndex((currentIdx) => {
            return (currentIdx + 1) % galleryItems.length;
        });
    };

    // Efek Otomatisasi (Autoplay)
    useEffect(() => {
        const interval = setInterval(goToNext, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, []);

    const currentItem = galleryItems[activeIndex];

    // Menghitung pergeseran horizontal yang diperlukan
    const slideTransform = {
        transform: `translateX(-${activeIndex * 100}%)`,
    };

    return (
        <section id="galeri" className="gallery-section">
            <div className="gallery-container">
                <h2 className="gallery-title">Galeri Kegiatan Sekolah</h2>
                <div className="gallery-underline"></div>

                <div className="slideshow-container">

                    {/* Tombol Sebelumnya */}
                    <button className="slide-btn prev" onClick={goToPrev}>
                        &#10094;
                    </button>

                    {/* Wrapper untuk semua slide, yang akan digeser (transform) */}
                    <div className="slideshow-wrapper" style={slideTransform}>
                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                className="slideshow-item"
                            >
                                <img
                                    className="slideshow-image"
                                    src={item.src}
                                    alt={item.title}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Tombol Selanjutnya */}
                    <button className="slide-btn next" onClick={goToNext}>
                        &#10095;
                    </button>

                    {/* Caption dan Indikator selalu tampil di depan */}
                    <div className="slideshow-caption">
                        <p className="caption-text">{currentItem.title}</p>

                        {/* Indikator Slide */}
                        <div className="dot-indicators">
                            {galleryItems.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Gallery;