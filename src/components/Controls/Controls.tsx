import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../i18n/translations';
import './Controls.css';

const languages: { key: Language; short: string }[] = [
    { key: 'pt-BR', short: 'PT' },
    { key: 'en-US', short: 'EN' },
];

export const Controls = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    const nextThemeLabel = theme === 'dark' ? t.controls.lightMode : t.controls.darkMode;

    return (
        <div className="controls">
            <div
                className="control-switch"
                role="group"
                aria-label={t.controls.languageLabel}
            >
                {languages.map((option) => (
                    <button
                        key={option.key}
                        type="button"
                        className={`control-option ${language === option.key ? 'active' : ''}`}
                        onClick={() => setLanguage(option.key)}
                        aria-pressed={language === option.key}
                        lang={option.key}
                    >
                        {option.short}
                    </button>
                ))}
            </div>

            <button
                type="button"
                className="control-toggle"
                onClick={toggleTheme}
                aria-label={nextThemeLabel}
                title={nextThemeLabel}
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
};
