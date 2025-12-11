import React from 'react';

const LanguageSelector = ({ onSelect }) => {
    return (
        <div className="language-screen">
            <div className="lang-content-wrapper">
                <div className="logo-container">
                    <img src="logo.png" alt="Hewar Logo" className="logo-img" />
                </div>

                <h1 className="app-title">
                    Hewar
                </h1>

                <p className="app-description">
                    A card game designed to spark deep conversations and meaningful connections.
                </p>

                <div className="lang-btn-container">
                    <button
                        onClick={() => onSelect('en')}
                        className="btn-3d lang-btn"
                    >
                        English
                    </button>

                    <button
                        onClick={() => onSelect('ar')}
                        className="btn-3d lang-btn font-ar"
                    >
                        عربي
                    </button>
                </div>
            </div>

            <div className="creator-footer">
                <span className="creator-text">Created by</span>
                <img src="signature.svg" alt="Ahmed Naguib" className="signature-img" />
            </div>
        </div>
    );
};

export default LanguageSelector;
