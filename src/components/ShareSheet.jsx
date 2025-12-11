import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const ShareSheet = ({ isOpen, onClose, onShare }) => {
    const sheetRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sheetRef.current && !sheetRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const options = [
        { id: 'instagram', label: 'Share to Instagram', icon: 'assets/icons/instagram.svg' },
        { id: 'tiktok', label: 'Share to TikTok', icon: 'assets/icons/tiktok.svg' },
        { id: 'whatsapp', label: 'Share to WhatsApp', icon: 'assets/icons/whatsapp.svg' },
        { id: 'download', label: 'Download as image', icon: 'assets/icons/download.svg' },
    ];

    return ReactDOM.createPortal(
        <div className="share-sheet-backdrop">
            <div className="share-sheet-content" ref={sheetRef}>
                <div className="share-sheet-header">
                    <h3>Share</h3>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <div className="share-options-grid">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            className="share-option-btn"
                            onClick={() => onShare(option.id)}
                        >
                            <div className="share-icon-wrapper">
                                <img src={option.icon} alt={option.label} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = '#eee' }} />
                            </div>
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ShareSheet;
