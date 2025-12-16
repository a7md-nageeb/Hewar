import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import { questions, categories } from '../data/questions';

const getRandomQuestions = (category, genre, count = 10) => {
    let filtered;
    if (genre === 'Random') {
        // Get all questions compatible with this category
        filtered = questions.filter(q => q.category.includes(category));
    } else {
        filtered = questions.filter(q => q.category.includes(category) && q.genre === genre);
    }

    // Shuffle array using Fisher-Yates algorithm
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    // Return limited count
    return filtered.slice(0, count);
};

const GameScreen = ({ category, genre, lang, onBack, onReplay, onHome }) => {
    const [deck, setDeck] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    const [showExitConfirm, setShowExitConfirm] = useState(false);

    useEffect(() => {
        const newDeck = getRandomQuestions(category, genre, 10);
        setDeck(newDeck);

        setLoading(false);
    }, [category, genre]);

    const handleNext = () => {
        if (currentIndex < deck.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setGameOver(true);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleCardClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;

        // If language is AR (RTL), left side is Next and right side is Previous?
        // Actually, "Previous" is usually "Back" (Right arrow in RTL, Left arrow in LTR for history, 
        // but typically "Next" advances forward). 
        // User request: "left half it takes you to previous question and if you press on right half it takes you to next question"
        // I will follow the explicit instruction regardless of RTL for now, or should I flip it for RTL?
        // "like instagram stories" -> tap right to go forward, tap left to go back. This is universal in Stories UI.
        // I will stick to: Left -> Prev, Right -> Next.

        if (x < rect.width / 2) {
            handlePrevious();
        } else {
            handleNext();
        }
    };

    const handleReplay = () => {
        setLoading(true);
        setCurrentIndex(0);
        setGameOver(false);
        const newDeck = getRandomQuestions(category, genre, 10);
        setDeck(newDeck);
        setLoading(false);
    };

    if (loading) return <div className="fs-loading">Loading...</div>;

    if (gameOver) {
        return (
            <div className="game-end-screen">
                <div className="logo-container">
                    <img src="logo.png" alt="Logo" className="logo-img" />
                </div>
                <h1 className="end-title">
                    {lang === 'en' ? 'Session Complete!' : 'خلصت الجولة!'}
                </h1>
                <p className="end-subtitle">
                    {lang === 'en' ? 'Hope you got to know each other better.' : 'يارب تكونوا عرفتوا بعض أكتر.'}
                </p>

                <div className="end-controls">
                    <button
                        onClick={() => setTimeout(handleReplay, 150)}
                        className="btn-3d end-btn end-btn-primary"
                    >
                        {lang === 'en' ? 'Play Again' : 'العب تاني'}
                        <img src="assets/icons/replay.svg" alt="Replay" style={{ width: '24px', height: '24px', filter: 'invert(1)' }} />
                    </button>

                    <button
                        onClick={() => setTimeout(onHome, 150)}
                        className="btn-3d end-btn end-btn-secondary"
                    >
                        {lang === 'en' ? 'Back to Home' : 'القائمة الرئيسية'}
                        <img src="assets/icons/home.svg" alt="Home" style={{ width: '24px', height: '24px' }} />
                    </button>
                </div>
            </div>
        )
    }

    const currentQuestion = deck[currentIndex];
    // If no questions found (empty deck)
    if (!currentQuestion) {
        return (
            <div className="game-end-screen">
                <h3>No questions found.</h3>
                <button onClick={onBack} className="btn-3d end-btn end-btn-secondary" style={{ marginTop: '1rem' }}>Go Back</button>
            </div>
        );
    }

    const totalQuestions = deck.length;

    return (
        <div className="game-screen">
            {/* Top Bar */}
            <div className="game-top-bar">
                <button
                    className="btn-tertiary game-back-btn"
                    onClick={() => setShowExitConfirm(true)}
                    style={{
                        width: 'auto',
                        padding: '0 0.8rem',
                        gap: '4px'
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 4.70711C13.0976 4.31658 13.0976 3.68342 12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L3.29381 11.292C3.11437 11.471 3.00257 11.7177 3.00004 11.9906C3.00001 11.9937 3 11.9968 3 12C3 12.0031 3.00001 12.0063 3.00004 12.0094C3.00249 12.2742 3.10782 12.5144 3.27798 12.6919C3.2829 12.697 3.28786 12.7021 3.29289 12.7071L11.2929 20.7071C11.6834 21.0976 12.3166 21.0976 12.7071 20.7071C13.0976 20.3166 13.0976 19.6834 12.7071 19.2929L6.41421 13L20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L6.41421 11L12.7071 4.70711Z" fill="currentColor" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }}>
                        <path d="M15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5C13.7348 5 13.4804 4.89464 13.2929 4.70711C13.1054 4.51957 13 4.26522 13 4C13 3.73478 13.1054 3.48043 13.2929 3.29289C13.4804 3.10536 13.7348 3 14 3C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 21L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 21L13 17L16 14L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12L19 9L15 8L12 11L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 19.428V4.57217C3 4.07767 3.45211 3.66675 3.99617 3.66675C4.54789 3.66675 5 4.07767 5 4.57217V19.428C5 19.9295 4.54789 20.3334 3.99617 20.3334C3.45211 20.3334 3 19.9295 3 19.428Z" fill="currentColor" />
                    </svg>
                </button>

                <div className="game-subtitle">
                    {lang === 'ar'
                        ? categories.find(c => c.id === category)?.label_ar || category
                        : `${category} Pack`
                    }
                </div>

                <div style={{ width: '40px' }}></div> {/* Spacer to center title */}
            </div>

            {/* Progress Dots / Bar */}
            <div className="progress-bar-container">
                {Array.from({ length: totalQuestions }).map((_, i) => (
                    <div key={i} className="progress-dot" style={{
                        background: i <= currentIndex ? 'var(--ocean-600)' : 'var(--ocean-100)',
                    }} />
                ))}
            </div>

            {/* Card Area */}
            <div className="card-area" onClick={handleCardClick}>
                <QuestionCard
                    question={currentQuestion}
                    lang={lang}
                    onNext={handleNext}
                />
            </div>

            {/* Bottom Controls */}
            <div className="game-controls">
                <ActionButton
                    label={lang === 'en' ? 'Back' : 'اللي فات'}
                    onClick={() => setTimeout(handlePrevious, 150)}
                />
                <ActionButton
                    label={lang === 'en' ? 'Next' : 'التالي'}
                    onClick={() => setTimeout(handleNext, 150)}
                    primary
                />
            </div>

            {/* Exit Confirmation Modal */}
            {showExitConfirm && (
                <div className="modal-overlay" onClick={() => setShowExitConfirm(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h3 className="modal-title">
                            {lang === 'en' ? 'Are you sure you want to end the session?' : 'متأكد إنك عايز تنهي الجولة؟'}
                        </h3>
                        <div className="modal-buttons">
                            <button className="btn-modal btn-cancel" onClick={() => setShowExitConfirm(false)}>
                                {lang === 'en' ? 'Cancel' : 'إلغاء'}
                            </button>
                            <button className="btn-modal btn-danger" onClick={onBack}>
                                {lang === 'en' ? 'End Session' : 'انهي الجولة'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ActionButton = ({ label, onClick, primary, icon, iconRight }) => (
    <button
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        className={`btn-3d action-btn ${primary ? 'action-btn-primary' : 'action-btn-secondary'}`}
        style={{
            flexDirection: iconRight ? 'row-reverse' : 'row'
        }}
    >
        {icon && <img src={icon} alt="" style={{ width: '24px', height: '24px', filter: primary ? 'invert(1)' : 'none' }} />}
        {label}
    </button>
);

export default GameScreen;
