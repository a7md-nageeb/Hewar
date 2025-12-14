import React, { useRef, useState } from 'react';
import { toJpeg } from 'html-to-image';

const QuestionCard = ({ question, lang, onNext }) => {
    const cardRef = useRef(null);
    const [isSharing, setIsSharing] = useState(false);

    const getGenreTheme = (genre) => {
        // Map genres to specific colors and assets based on provided designs
        switch (genre) {
            case 'Funny': return { bg: '#8B4513', text: '#FFFFFF', accent: '#FFF5E6', img: 'assets/funny.png' }; // Brown/Orange
            case 'Awkward':
            case 'uncomfortable': return { bg: '#109E45', text: '#FFFFFF', accent: '#E6FFF0', img: 'assets/awkward.png' }; // Green
            case 'Deep': return { bg: '#296D8F', text: '#FFFFFF', accent: '#E6F4FF', img: 'assets/deep.png' }; // Blue (Cyan-ish)
            case 'Honest': return { bg: '#6B8E23', text: '#FFFFFF', accent: '#F5FFE6', img: 'assets/honest.png' }; // Lime/Olive
            case 'Know me':
            case 'know me better': return { bg: '#6A2C70', text: '#FFFFFF', accent: '#FDE6FF', img: 'assets/know_me.png' }; // Purple
            case 'What If': return { bg: '#1A2C4F', text: '#FFFFFF', accent: '#E6F0FF', img: 'assets/what_if.png' }; // Navy Blue
            default: return { bg: 'var(--green-50)', text: 'var(--green-900)', accent: 'var(--green-800)', img: null }; // Default
        }
    };

    const theme = getGenreTheme(question.genre);

    const generateImage = async () => {
        if (cardRef.current) {
            return await toJpeg(cardRef.current, {
                quality: 0.95,
                backgroundColor: theme.bg,
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
                            color: theme.bg,
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
                        fontFamily: lang === 'ar' ? 'Nunito, Cairo, sans-serif' : 'Nunito, sans-serif',
                        textAlign: lang === 'ar' ? 'right' : 'left'
                    }}>
                        {lang === 'ar' ? question.text_ar : question.text_en}
                    </h2>
                </div>

                {/* Footer Branding */}
                <div className="card-footer">
                    <img src="logo.png" alt="Logo" className="card-footer-logo" />
                    <div className="card-footer-text">
                        <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>Hewar</span>
                        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Hewar.com</span>
                    </div>
                </div>

                {/* Share Button (Floating inside card but positioned absolute) */}
                <button
                    onClick={handleShareClick}
                    className="btn-3d share-btn"
                    disabled={isSharing}
                >
                    <img src="assets/icons/share.svg" alt="" style={{ width: '20px', height: '20px' }} />
                    <span>{isSharing ? '...' : 'Share'}</span>
                </button>
            </div>
        </>
    );
};

export default QuestionCard;
