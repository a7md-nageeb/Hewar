import React, { useRef, useState } from 'react';
import { toJpeg } from 'html-to-image';
import AnimatedButton from './AnimatedButton';

const QuestionCard = ({ question, lang, onNext }) => {
    const cardRef = useRef(null);
    const [isSharing, setIsSharing] = useState(false);

    const getGenreTheme = (genre) => {
        // Map genres to specific colors and assets based on provided designs
        const langPath = lang === 'ar' ? 'ar' : 'en';
        switch (genre) {
            case 'Funny': return { bg: 'var(--orange-50)', text: 'var(--orange-900)', accent: 'var(--orange-200)', img: `assets/vibes/${langPath}/funny.png` }; // Orange
            case 'Awkward':
            case 'uncomfortable': return { bg: 'var(--green-50)', text: 'var(--green-900)', accent: 'var(--green-200)', img: `assets/vibes/${langPath}/awkward.png` }; // Green
            case 'Deep': return { bg: 'var(--ocean-50)', text: 'var(--ocean-900)', accent: 'var(--ocean-200)', img: `assets/vibes/${langPath}/deep.png` }; // Ocean
            case 'Honest': return { bg: 'var(--lime-50)', text: 'var(--lime-900)', accent: 'var(--lime-200)', img: `assets/vibes/${langPath}/honest.png` }; // Lime
            case 'Know me':
            case 'know me better': return { bg: 'var(--lilac-50)', text: 'var(--lilac-900)', accent: 'var(--lilac-200)', img: `assets/vibes/${langPath}/know_me.png` }; // Lilac
            case 'What If':
            case 'What If...': return { bg: 'var(--cyan-50)', text: 'var(--cyan-900)', accent: 'var(--cyan-200)', img: `assets/vibes/${langPath}/what_if.png` }; // Cyan
            default: return { bg: 'var(--green-50)', text: 'var(--green-900)', accent: 'var(--green-200)', img: null }; // Default
        }
    };

    const theme = getGenreTheme(question.genre);

    const generateImage = async () => {
        if (cardRef.current) {
            return await toJpeg(cardRef.current, {
                quality: 0.95,
                backgroundColor: theme.bg,
                style: {
                    fontFamily: lang === 'ar' ? 'Rubik, sans-serif' : 'Nunito, sans-serif'
                },
                filter: (node) => {
                    // Exclude the share button from the image
                    return !node.classList?.contains('share-btn');
                }
            });
        }
        return null;
    };

    const handleShareClick = async (e) => {
        e.stopPropagation();
        if (isSharing) return;

        setIsSharing(true);
        try {
            const dataUrl = await generateImage();
            if (!dataUrl) {
                setIsSharing(false);
                return;
            }

            const blob = await (await fetch(dataUrl)).blob();
            const file = new File([blob], 'hewar-card.jpeg', { type: 'image/jpeg' });

            // Try native share
            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'Hewar Question',
                    text: 'Check out this question from Hewar!'
                });
            } else {
                // Fallback to download if native share fails
                const link = document.createElement('a');
                link.download = 'hewar-card.jpeg';
                link.href = dataUrl;
                link.click();
            }
        } catch (err) {
            console.error('Sharing failed', err);
        } finally {
            setIsSharing(false);
        }
    };

    return (
        <>
            <div ref={cardRef} className="question-card" style={{
                background: theme.bg,
                color: theme.text
            }}>
                {/* Top Tag - Image Only */}
                <div className="card-top-tag">
                    {theme.img && (
                        <div className="card-tag-img-wrapper">
                            <img src={theme.img} alt={question.genre} className="card-tag-img" />
                        </div>
                    )}
                    {!theme.img && (
                        <div className="card-tag-fallback" style={{
                            background: theme.accent,
                            color: theme.text,
                        }}>
                            <span>👾</span> {question.genre}
                        </div>
                    )}
                </div>

                {/* Question Text */}
                <div className="card-content">
                    <h2 className="card-question-text" style={{
                        fontSize: lang === 'ar' ? '1.8rem' : '2.2rem',
                        direction: lang === 'ar' ? 'rtl' : 'ltr',
                        fontFamily: lang === 'ar' ? 'Rubik, sans-serif' : 'Nunito, sans-serif',
                        textAlign: lang === 'ar' ? 'right' : 'left'
                    }}>
                        {lang === 'ar' ? (question.text_ar || question.text_en) : question.text_en}
                    </h2>
                </div>

                {/* Footer Branding */}
                <div className="card-footer">
                    <img src="logo.png" alt="Logo" className="card-footer-logo" />
                    <div className="card-footer-text">
                        <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>Hewar</span>
                        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Hewargame.com</span>
                    </div>
                </div>

                {/* Share Button (Floating inside card but positioned absolute) */}
                {/* Share Button (Floating inside card but positioned absolute) */}
                <AnimatedButton
                    onClick={handleShareClick}
                    className="btn-3d share-btn"
                    disabled={isSharing}
                    stopPropagation={true}
                    style={{
                        right: lang === 'ar' ? 'auto' : '1.5rem',
                        left: lang === 'ar' ? '1.5rem' : 'auto',
                        flexDirection: lang === 'ar' ? 'row-reverse' : 'row'
                    }}
                >
                    <img src="assets/icons/share.svg" alt="" style={{ width: '20px', height: '20px' }} />
                    <span>{isSharing ? '...' : (lang === 'ar' ? 'مشاركة' : 'Share')}</span>
                </AnimatedButton>
            </div>
        </>
    );
};

export default QuestionCard;
