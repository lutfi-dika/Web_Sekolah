// src/component/loading.jsx
import React from 'react';
import "./LoadingSpinner.css"; // PATH RELATIF YANG BENAR

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
            <p>Memuat data...</p>
        </div>
    );
};

export default LoadingSpinner;