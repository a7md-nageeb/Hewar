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
            {/* Top Section (White) */}
            <div className="home-top-section">
                {/* Language Pill */}
                <div className="home-top-bar centered">
                    <button className="lang-pill-btn" onClick={toggleSheet}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        <span>{lang === 'ar' ? 'عربي' : 'English'}</span>
                    </button>
                </div>

                <div className="hero-container">
                    <img src="assets/images/home_hero.png" alt="Card Game Illustration" className="hero-img-static" />
                </div>
            </div>

            {/* Bottom Section (Blue) */}
            <div className="home-bottom-section">
                {/* Cloud Divider - positioned absolutely or negatively docked to top */}
                <div className="clouds-divider">
                    <picture>
                        <source media="(min-width: 600px)" srcSet="assets/images/clouds_web.svg" />
                        <img src="assets/images/clouds.svg" alt="" className="clouds-img" />
                    </picture>
                </div>

                <div className="home-content-container">
                    <h1 className="app-title-large">
                        {lang === 'ar' ? 'حوار' : 'Hewar'}
                    </h1>

                    <div className="subtitle-container">
                        <div className="subtitle-line-blue">
                            {lang === 'ar' ? 'كلام من القلب' : 'Deep Talks'}
                        </div>
                        <div className="subtitle-line-lilac">
                            {lang === 'ar' ? 'تواصل حقيقي' : 'Real Bonds'}
                        </div>
                    </div>

                    <div className="home-cta-wrapper">
                        <button
                            onClick={() => setTimeout(onStart, 150)}
                            className="btn-3d lang-btn action-btn-primary cta-btn-large cta-btn-xl"
                        >
                            {lang === 'ar' ? 'يلا بينا' : "Let's Go"}
                        </button>
                    </div>
                </div>
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
                                {lang === 'en' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="check-icon" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="currentColor" />
                                    </svg>
                                )}
                            </button>
                            <button
                                className={`sheet-option ${lang === 'ar' ? 'active' : ''}`}
                                onClick={() => handleSelect('ar')}
                            >
                                <span>عربي</span>
                                {lang === 'ar' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="check-icon" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="currentColor" />
                                    </svg>
                                )}
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
