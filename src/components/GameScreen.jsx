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
    const [deck, setDeck] = useState(() => generateDeck(category, genre, 10));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [direction, setDirection] = useState(0); // 1 = Next (slide left), -1 = Previous (slide right)

    const [showExitConfirm, setShowExitConfirm] = useState(false);

    useEffect(() => {
        // Save session whenever deck changes (mount & replay)
        const ids = deck.map(q => q.id);
        saveSession(ids);
    }, [deck]);

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
        const isRTL = lang === 'ar';

        // Logic:
        // LTR: Left -> Prev, Right -> Next
        // RTL: Left -> Next, Right -> Prev (Swapped)

        if (x < rect.width / 2) {
            // Left Side Click
            if (isRTL) {
                handleNext();
            } else {
                handlePrevious();
            }
        } else {
            // Right Side Click
            if (isRTL) {
                handlePrevious();
            } else {
                handleNext();
            }
        }
    };

    const handleReplay = () => {
        setCurrentIndex(0);
        setGameOver(false);
        const newDeck = generateDeck(category, genre, 10);
        setDeck(newDeck);
    };

    // Loading check removed

    const handleShareGame = async () => {
        const shareData = {
            title: 'Hewar',
            text: 'Struggling to open a topic? Try this game',
            url: 'https://hewargame.com'
        };

        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Share canceled', err);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert(lang === 'en' ? 'Link copied to clipboard!' : 'تم نسخ الرابط!');
            } catch (err) {
                console.error('Failed to copy', err);
            }
        }
    };

    if (gameOver) {
        return (
            <div className="session-complete-screen">
                <div className="pattern-overlay" />

                <div className="session-content">
                    {/* Cloud Logo */}
                    <img src="assets/logo-cloud.svg" alt="Hewar Logo" className="session-complete-logo" />

                    <h1 className="session-title">
                        {lang === 'en' ? 'All Done!' : 'خلصت الجولة!'}
                    </h1>
                </div>

                {/* Bottom Buttons Container (48px from bottom handled by padding in CSS) */}
                <div className="session-bottom-container">
                    {/* Share Button (Tertiary) */}
                    <button onClick={handleShareGame} className="btn-tertiary-share">
                        <div
                            className="icon-masked"
                            style={{
                                backgroundColor: 'var(--ocean-300)',
                                WebkitMaskImage: `url(assets/icons/share-icon.svg)`,
                                maskImage: `url(assets/icons/share-icon.svg)`
                            }}
                        />
                        {lang === 'en' ? 'Share Game with Friends' : 'شارك اللعبة مع صحابك'}
                    </button>

                    <div className="session-buttons">
                        <button
                            onClick={() => setTimeout(handleReplay, 150)}
                            className="btn-3d action-btn-primary cta-btn-large"
                            style={{ gap: '12px' }}
                        >
                            <img
                                src="assets/icons/replay.svg"
                                alt="Replay"
                                style={{ width: '1.5rem', height: '1.5rem', filter: 'invert(1)' }}
                            />
                            {lang === 'en' ? 'Play Again' : 'العب تاني'}
                        </button>

                        <button
                            onClick={() => setTimeout(onHome, 150)}
                            className="btn-3d action-btn action-btn-secondary"
                            style={{ width: '100%', justifyContent: 'center', gap: '12px' }}
                        >
                            <div
                                className="icon-masked"
                                style={{
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    backgroundColor: 'var(--ocean-300)',
                                    WebkitMaskImage: `url(assets/icons/home.svg)`,
                                    maskImage: `url(assets/icons/home.svg)`
                                }}
                            />
                            {lang === 'en' ? 'Back to Home' : 'القائمة الرئيسية'}
                        </button>
                    </div>
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
            {/* Header: X | Progress | Counter */}
            <div className="game-header">
                <button
                    className="btn-tertiary close-game-btn"
                    onClick={() => setShowExitConfirm(true)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="progress-track">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                    />
                </div>

                <div className="question-counter">
                    <span className="current-num">{currentIndex + 1}</span>
                    <span className="total-num">/ {totalQuestions}</span>
                </div>
            </div>

            {/* Card Area */}
            <div className="card-area" onClick={handleCardClick}>
                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={{
                            enter: (direction) => {
                                const isRTL = lang === 'ar';
                                // Normal: dir > 0 (Next) -> enter from right (positive x)
                                // RTL: dir > 0 (Next) -> enter from left (negative x)
                                const xVal = isRTL ? (direction > 0 ? -340 : 340) : (direction > 0 ? 340 : -340);
                                return {
                                    x: xVal,
                                    opacity: 0,
                                    scale: 0.9
                                };
                            },
                            center: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            exit: (direction) => {
                                const isRTL = lang === 'ar';
                                // Normal: dir > 0 (Next) -> exit to left (negative x)
                                // RTL: dir > 0 (Next) -> exit to right (positive x)
                                const xVal = isRTL ? (direction > 0 ? 340 : -340) : (direction > 0 ? -340 : 340);
                                return {
                                    x: xVal,
                                    opacity: 0,
                                    scale: 0.9
                                };
                            }
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

            {/* Exit Confirmation Bottom Sheet */}
            <AnimatePresence>
                {showExitConfirm && (
                    <motion.div
                        className="bottom-sheet-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowExitConfirm(false)}
                    >
                        <motion.div
                            className="bottom-sheet-content"
                            onClick={e => e.stopPropagation()}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            drag="y"
                            dragConstraints={{ top: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.y > 100 || velocity.y > 100) {
                                    setShowExitConfirm(false);
                                }
                            }}
                        >
                            <div className="sheet-handle" />
                            <div className="end-session-sheet">
                                <img src="assets/angry-character.svg" alt="" className="end-session-img" />
                                <h3 className="end-session-title">
                                    {lang === 'en' ? 'Are you sure you want to end this session?' : 'متأكد إنك عايز تنهي الجولة؟'}
                                </h3>
                                <div className="end-session-buttons">
                                    <button className="btn-3d action-btn action-btn-danger" onClick={onHome}>
                                        {lang === 'en' ? 'End Session' : 'انهي الجولة'}
                                    </button>
                                    <button className="btn-3d action-btn action-btn-secondary" onClick={() => setShowExitConfirm(false)}>
                                        {lang === 'en' ? 'Cancel' : 'إلغاء'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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
