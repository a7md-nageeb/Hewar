import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import { questions } from '../data/questions';

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
                        onClick={handleReplay}
                        className="btn-3d end-btn end-btn-primary"
                    >
                        {lang === 'en' ? 'Play Again' : 'العب تاني'}
                        <img src="assets/icons/replay.svg" alt="Replay" style={{ width: '24px', height: '24px', filter: 'invert(1)' }} />
                    </button>

                    <button
                        onClick={onHome}
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
                    <img src="assets/icons/arrow-left-alt2.svg" alt="Back" style={{ width: '24px', height: '24px', transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                    <img src="assets/icons/leave.svg" alt="Leave" style={{ width: '24px', height: '24px', transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
                </button>

                <div className="game-subtitle">
                    {category} Pack
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
            <div className="card-area" onClick={handleNext}>
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
                    onClick={() => { if (currentIndex > 0) setCurrentIndex(prev => prev - 1) }}
                    icon="assets/icons/back.svg"
                />
                <ActionButton
                    label={lang === 'en' ? 'Next' : 'التالي'}
                    onClick={handleNext}
                    primary
                    icon="assets/icons/next.svg"
                    iconRight
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
