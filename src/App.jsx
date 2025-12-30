import { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import SelectionScreen from './components/SelectionScreen';
import GameScreen from './components/GameScreen';

function App() {
    const [view, setView] = useState('language'); // language, selection, game
    const [lang, setLang] = useState('en');
    const [gameConfig, setGameConfig] = useState({ category: null, genre: null });

    // Update HTML dir attribute when language changes
    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    const handleLanguageSelect = (selectedLang) => {
        setLang(selectedLang);
        // Do not change view here anymore
    };

    const handleStart = () => {
        setView('selection');
    };

    const handleStartGame = (category, genre) => {
        setGameConfig({ category, genre });
        setView('game');
    };

    const handleBack = () => {
        if (view === 'game') setView('selection');
        if (view === 'selection') setView('language');
    };

    return (
        <div className="app-container">
            {view === 'language' && (
                <LanguageSelector
                    lang={lang}
                    onLanguageChange={handleLanguageSelect}
                    onStart={handleStart}
                />
            )}

            {view === 'selection' && (
                <SelectionScreen
                    lang={lang}
                    onStart={handleStartGame}
                    onBack={handleBack}
                />
            )}

            {view === 'game' && (
                <GameScreen
                    lang={lang}
                    category={gameConfig.category}
                    genre={gameConfig.genre}
                    onBack={handleBack}
                    onHome={() => setView('language')}
                />
            )}
        </div>
    );
}

export default App;
