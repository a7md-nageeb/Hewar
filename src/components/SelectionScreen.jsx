import React, { useState } from 'react';
import { categories, genres } from '../data/questions';

const SelectionScreen = ({ lang, onStart, onBack }) => {
    const [step, setStep] = useState(1); // 1 = Category, 2 = Genre
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Compatibility Logic
    const getCompatibleGenres = (categoryId) => {
        // 🚫 Not Recommended (Hard Filter)
        const forbidden = {
            'First Time Meeting': ['Uncomfortable', 'Know Me Better', 'Brutally Honest'],
            'Coworkers': ['Uncomfortable', 'Know Me Better', 'Brutally Honest'],
            'First Date': ['Know Me Better'],
        };

        const blocked = forbidden[categoryId] || [];
        return genres.filter(g => !blocked.includes(g.id));
    };

    const handleCategorySelect = (catId) => {
        setSelectedCategory(catId);
        setStep(2);
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
        border: 'var(--charcoal-100)',
        shadow: 'var(--charcoal-100)',
        color: 'var(--charcoal-900)'
    };

    // Random style
    const randomStyle = {
        bg: 'var(--charcoal-900)',
        border: 'var(--charcoal-900)',
        shadow: 'var(--charcoal-500)',
        color: 'var(--white)'
    };

    return (
        <div className="selection-screen">
            {/* Header */}
            <div className="selection-header">
                <button
                    onClick={step === 1 ? onBack : () => setStep(1)}
                    className="btn-tertiary back-btn"
                    style={{
                        transform: lang === 'ar' ? 'scaleX(-1)' : 'none'
                    }}
                >
                    <img src="/assets/icons/arrow-left-alt2.svg" alt="Back" style={{ width: '24px', height: '24px' }} />
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
                            onClick={() => step === 1 ? handleCategorySelect(item.id) : onStart(selectedCategory, item.id)}
                            className="selection-item"
                            style={{
                                aspectRatio: isRandom ? '2.1 / 1' : '1',
                                gridColumn: isRandom ? '1 / -1' : 'auto',
                                background: style.bg,
                                border: `2px solid ${style.border}`,
                                color: style.color,
                                boxShadow: `0 6px 0 ${style.shadow}`,
                            }}
                            onMouseDown={(e) => {
                                e.currentTarget.style.transform = 'translateY(6px)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            onMouseUp={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 6px 0 ${style.shadow}`;
                            }}
                            onTouchStart={(e) => {
                                e.currentTarget.style.transform = 'translateY(6px)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            onTouchEnd={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 6px 0 ${style.shadow}`;
                            }}
                        >
                            {isRandom && <img src="/assets/icons/random.svg" alt="" style={{ width: '24px', height: '24px', filter: 'invert(1)' }} />}
                            {isRandom ? (lang === 'en' ? 'Surprise Me' : 'فاجئني') : (lang === 'en' ? item.label_en : item.label_ar)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SelectionScreen;
