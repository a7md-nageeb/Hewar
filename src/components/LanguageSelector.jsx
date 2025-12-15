import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const LanguageSelector = ({ lang, onLanguageChange, onStart }) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const toggleSheet = () => setIsSheetOpen(!isSheetOpen);
    const closeSheet = (e) => {
        if (e.target.classList.contains('bottom-sheet-overlay')) {
            setIsSheetOpen(false);
        }
    };

    const handleSelect = (selectedLang) => {
        onLanguageChange(selectedLang);
        setIsSheetOpen(false);
    };

    return (
        <div className="language-screen home-screen">
            {/* Top Bar */}
            <div className="home-top-bar">
                <button className="lang-pill-btn" onClick={toggleSheet}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span>{lang === 'ar' ? 'عربي' : 'English'}</span>
                </button>
            </div>

            <div className="lang-content-wrapper">
                <div className="logo-container">
                    <img src="logo.png" alt="Hewar Logo" className="logo-img" />
                </div>

                <h1 className="app-title">
                    {lang === 'ar' ? 'حوار' : 'Hewar'}
                </h1>

                <p className="app-description">
                    {lang === 'ar'
                        ? 'لعبة كروت معمولة عشان تخلق حوارات عميقة وتواصل حقيقي.'
                        : 'A card game designed to spark deep conversations and meaningful connections.'}
                </p>

                <div className="lang-btn-container home-cta-container">
                    <button
                        onClick={() => setTimeout(onStart, 150)}
                        className="btn-3d lang-btn action-btn-primary"
                        style={{ width: '100%', fontSize: '1.4rem' }}
                    >
                        {lang === 'ar' ? 'يلا بينا' : "Let's Go"}
                    </button>
                </div>
            </div>

            <div className="creator-footer">
                <img src="signature.svg" alt="Ahmed Naguib" className="signature-img" />
            </div>

            {/* Language Bottom Sheet */}
            {isSheetOpen && createPortal(
                <div className="bottom-sheet-overlay" onClick={closeSheet}>
                    <div className="bottom-sheet-content">
                        <div className="sheet-handle"></div>
                        <h3 className="sheet-title">{lang === 'ar' ? 'اختر اللغة' : 'Select Language'}</h3>

                        <div className="sheet-options">
                            <button
                                className={`sheet-option ${lang === 'en' ? 'active' : ''}`}
                                onClick={() => handleSelect('en')}
                            >
                                <span>English</span>
                                {lang === 'en' && <span className="check-icon">✓</span>}
                            </button>
                            <button
                                className={`sheet-option ${lang === 'ar' ? 'active' : ''}`}
                                onClick={() => handleSelect('ar')}
                            >
                                <span>عربي</span>
                                {lang === 'ar' && <span className="check-icon">✓</span>}
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default LanguageSelector;
