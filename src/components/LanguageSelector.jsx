import AnimatedButton from './AnimatedButton';

const LanguageSelector = ({ lang, onLanguageChange, onStart }) => {
    return (
        <div className="language-screen home-screen">
            {/* Top Section (White) */}
            <div className="home-top-section">
                {/* Language Toggle */}
                <div className="home-top-bar centered">
                    <div className="lang-toggle-container">
                        <button
                            className={`lang-toggle-btn ${lang === 'en' ? 'selected' : ''}`}
                            onClick={() => onLanguageChange('en')}
                            style={{ fontFamily: 'Nunito, sans-serif' }}
                        >
                            English
                        </button>
                        <button
                            className={`lang-toggle-btn ${lang === 'ar' ? 'selected' : ''}`}
                            onClick={() => onLanguageChange('ar')}
                            style={{ fontFamily: 'Rubik, sans-serif' }}
                        >
                            العربية
                        </button>
                    </div>
                </div>

                <div className="hero-container">
                    <img src="assets/images/home_hero.png" alt="Card Game Illustration" className="hero-img-static" />
                </div>
            </div>

            {/* Bottom Section (Blue) */}
            <div className="home-bottom-section">
                {/* Cloud Divider - positioned absolutely or negatively docked to top */}
                <div className="clouds-divider">
                    <picture>
                        <source media="(min-width: 600px)" srcSet="assets/images/clouds_web.svg" />
                        <img src="assets/images/clouds.svg" alt="" className="clouds-img" />
                    </picture>
                </div>

                <div className="home-content-container">
                    <h1 className="app-title-large">
                        {lang === 'ar' ? 'حـــوار' : 'Hewar'}
                    </h1>

                    <div className="subtitle-container">
                        <div className="subtitle-line-blue">
                            {lang === 'ar' ? 'تواصل حقيقي' : 'Deep Talks'}
                        </div>
                        <div className="subtitle-line-lilac">
                            {lang === 'ar' ? 'كلام عميق' : 'Real Bonds'}
                        </div>
                    </div>

                    <div className="home-cta-wrapper">
                        <AnimatedButton
                            onClick={onStart}
                            className="btn-3d lang-btn action-btn-primary cta-btn-large cta-btn-xl"
                        >
                            {lang === 'ar' ? 'يلا بينا' : "Let's Go"}
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
