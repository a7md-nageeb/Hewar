import React, { useState } from 'react';
import { categories, genres } from '../data/questions';

const SelectionScreen = ({ lang, onStart, onBack }) => {
    const [step, setStep] = useState(1); // 1 = Category, 2 = Genre
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Compatibility Logic
    const getCompatibleGenres = (categoryId) => {
        // 🚫 Not Recommended (Hard Filter)
        const forbidden = {
            'First Time Meeting': ['Uncomfortable', 'Know Me Better', 'Honest'],
            'Coworkers': ['Uncomfortable', 'Know Me Better', 'Honest'],
            'First Date': ['Know Me Better'],
        };

        const blocked = forbidden[categoryId] || [];
        return genres.filter(g => !blocked.includes(g.id));
    };

    const handleCategorySelect = (catId) => {
        setTimeout(() => {
            setSelectedCategory(catId);
            setStep(2);
        }, 200);
    };

    const handleGenreSelect = (genreId) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onStart(selectedCategory, genreId);
        }, 800); // Reduced friction
    };

    const renderHeader = () => {
        if (step === 1) return lang === 'en' ? "Who are you playing with?" : "هتلعب مع مين؟";
        return lang === 'en' ? "Choose your vibe" : "اختار المود";
    };

    const items = step === 1 ? categories : [
        { id: 'Random', label_en: 'Surprise Me', label_ar: 'فاجئني', isRandom: true },
        ...getCompatibleGenres(selectedCategory)
    ];

    // Standard style for all items
    const defaultStyle = {
        bg: 'var(--white)',
        border: 'var(--ocean-100)',
        shadow: 'var(--ocean-100)',
        color: 'var(--ocean-900)'
    };

    // Random style
    const randomStyle = {
        bg: 'var(--ocean-900)',
        border: 'var(--ocean-900)',
        shadow: 'var(--ocean-500)',
        color: 'var(--white)'
    };

    return (
        <div className="selection-screen">
            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-content">
                        <div className="spinner"></div>
                        <p className="loading-text">
                            {lang === 'en' ? "Generating session..." : "جاري تحضير الجلسة..."}
                        </p>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="selection-header">
                <button
                    onClick={step === 1 ? onBack : () => setStep(1)}
                    className="btn-tertiary back-btn"
                    style={{
                        transform: lang === 'ar' ? 'scaleX(-1)' : 'none'
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 4.70711C13.0976 4.31658 13.0976 3.68342 12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L3.29381 11.292C3.11437 11.471 3.00257 11.7177 3.00004 11.9906C3.00001 11.9937 3 11.9968 3 12C3 12.0031 3.00001 12.0063 3.00004 12.0094C3.00249 12.2742 3.10782 12.5144 3.27798 12.6919C3.2829 12.697 3.28786 12.7021 3.29289 12.7071L11.2929 20.7071C11.6834 21.0976 12.3166 21.0976 12.7071 20.7071C13.0976 20.3166 13.0976 19.6834 12.7071 19.2929L6.41421 13L20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L6.41421 11L12.7071 4.70711Z" fill="currentColor" />
                    </svg>
                </button>
                <h2 className="header-title">
                    {renderHeader()}
                </h2>
            </div>

            {/* Grid */}
            <div className="selection-grid">
                {items.map((item) => {
                    const isRandom = item.id === 'Random';
                    const style = isRandom ? randomStyle : defaultStyle;

                    return (
                        <button
                            key={item.id}
                            onClick={() => step === 1 ? handleCategorySelect(item.id) : handleGenreSelect(item.id)}
                            className={`selection-item btn-3d ${isRandom ? 'is-random action-btn-primary' : ''}`}
                            style={{
                                aspectRatio: isRandom ? undefined : 'auto',
                                minHeight: '100px', /* Ensure decent touch target size */
                                /* Maintaining layout/size constraints as requested */
                            }}
                        >
                            <div className={`selection-content ${isRandom ? 'selection-content-random' : ''}`}>
                                {isRandom && <img src="assets/icons/random.svg" alt="" style={{ width: '24px', height: '24px', filter: 'invert(1)' }} />}
                                <div className="selection-label">
                                    {isRandom ? (lang === 'en' ? 'Shuffle' : 'عشوائي') : (lang === 'en' ? item.label_en : item.label_ar)}
                                </div>
                                {/* Description removed for now */}
                                {/* {!isRandom && step === 1 && (
                                    <div className="selection-description">
                                        {lang === 'en' ? item.description_en : item.description_ar}
                                    </div>
                                )} */}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SelectionScreen;
