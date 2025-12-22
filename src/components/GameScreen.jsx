import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionCard from './QuestionCard';
import { questions, categories, genres } from '../data/questions';
import { saveSession, getRecentHistory, updateUsageCounts, getUsageCounts } from '../utils/sessionManager';

const generateDeck = (category, genre, count = 10) => {
    // 1. Get Usage Counts & History
    const recentIds = getRecentHistory(3);
    const usageCounts = getUsageCounts();

    const getUsage = (id) => usageCounts[id] || 0;

    // Helper: Shuffle
    const shuffle = (array) => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    // 2. Candidate Selection
    let candidates;
    if (genre === 'Random') {
        candidates = questions.filter(q => q.category.includes(category));
    } else {
        candidates = questions.filter(q => q.category.includes(category) && q.genre === genre);
    }

    // 3. Filter History
    // Attempt to exclude recent questions. If that leaves us with too few, we might have to relax it.
    let available = candidates.filter(q => !recentIds.has(q.id));

    // Fallback: If pool is too small (< count), try to add back history
    if (available.length < count) {
        // Add back everything from candidates that was filtered
        const missing = candidates.filter(q => recentIds.has(q.id));
        available = [...available, ...missing];

        // If STILL small, inject from 'Random' or 'What If'
        if (available.length < count) {
            const fillers = questions.filter(q =>
                (q.genre === 'What If' || q.genre === 'Funny') &&
                !available.some(existing => existing.id === q.id)
            );
            // Shuffle fillers and add enough to meet count
            available = [...available, ...shuffle(fillers).slice(0, count - available.length)];
        }
    }

    // 4. Sort by Usage Count (Ascending)
    // We shuffle first to ensure random order among equal usage counts
    available = shuffle(available);
    available.sort((a, b) => getUsage(a.id) - getUsage(b.id));

    // 5. Select Initial Pool of (count * 1.5) or similar for Light check
    // We take a slightly larger set to find Light questions in
    let workingSet = available.slice(0, Math.max(count, 20));

    // 6. Apply "3 Light First" Rule

    const lightQuestions = workingSet.filter(q => q.intensity === 'Light');
    const otherQuestions = workingSet.filter(q => q.intensity !== 'Light');

    // Pick top 3 Light
    const startSet = lightQuestions.slice(0, 3);

    // Remaining for pool
    const unusedLight = lightQuestions.slice(3);
    const mixedPool = [...unusedLight, ...otherQuestions];

    // Shuffle the rest
    const shuffledPool = shuffle(mixedPool);

    // Fill deck
    const needed = count - startSet.length;
    const finalDeck = [...startSet, ...shuffledPool.slice(0, needed)];

    return finalDeck;
};

const GameScreen = ({ category, genre, lang, onBack, onReplay, onHome }) => {
    const [deck, setDeck] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [direction, setDirection] = useState(0); // 1 = Next (slide left), -1 = Previous (slide right)

    const [showExitConfirm, setShowExitConfirm] = useState(false);

    useEffect(() => {
        const newDeck = generateDeck(category, genre, 10);
        setDeck(newDeck);

        // Save session immediately
        const ids = newDeck.map(q => q.id);
        saveSession(ids);

        setLoading(false);
    }, [category, genre]);

    const handleNext = () => {
        if (currentIndex < deck.length - 1) {
            setDirection(1);
            setCurrentIndex(prev => prev + 1);
        } else {
            setGameOver(true);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleCardClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;

        // Left -> Prev, Right -> Next
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
        const newDeck = generateDeck(category, genre, 10);
        setDeck(newDeck);

        // Track the replay session too
        const ids = newDeck.map(q => q.id);
        saveSession(ids);

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

    // Get category and genre labels for display
    const categoryObj = categories.find(c => c.id === category);
    const genreObj = genres.find(g => g.id === genre);
    const categoryLabel = lang === 'en' ? categoryObj?.label_en : categoryObj?.label_ar;
    const genreLabel = lang === 'en' ? genreObj?.label_en : genreObj?.label_ar;
    const packSuffix = lang === 'en' ? 'Pack' : 'باقة';
    const packTitle = genre === 'Random'
        ? `${categoryLabel} ${packSuffix}`
        : `${genreLabel} ${categoryLabel} ${packSuffix}`;

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
                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={{
                            enter: (direction) => ({
                                x: direction > 0 ? 340 : -340,
                                opacity: 0,
                                scale: 0.9
                            }),
                            center: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            exit: (direction) => ({
                                x: direction > 0 ? -340 : 340,
                                opacity: 0,
                                scale: 0.9
                            })
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 150, damping: 20 },
                            opacity: { duration: 0.4 },
                            scale: { duration: 0.4 }
                        }}
                        style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                    >
                        <QuestionCard
                            question={currentQuestion}
                            lang={lang}
                            onNext={handleNext}
                        />
                    </motion.div>
                </AnimatePresence>
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
