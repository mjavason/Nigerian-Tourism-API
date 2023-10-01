import i18n from 'i18next';

// Manually load translation files
const englishTranslations = require('../constants/languages/english.json');
const frenchTranslations = require('../constants/languages/french.json');
const chineseTranslations = require('../constants/languages/chinese.json');
const hausaTranslations = require('../constants/languages/hausa.json'); // Fill in Hausa translations
const hindiTranslations = require('../constants/languages/hindi.json'); // Fill in Hindi translations
const igboTranslations = require('../constants/languages/igbo.json'); // Fill in Igbo translations
const italianTranslations = require('../constants/languages/italian.json'); // Fill in Italian translations
const japaneseTranslations = require('../constants/languages/japanese.json'); // Fill in Japanese translations
const koreanTranslations = require('../constants/languages/korean.json'); // Fill in Korean translations
const russianTranslations = require('../constants/languages/russian.json'); // Fill in Russian translations
const spanishTranslations = require('../constants/languages/spanish.json'); // Fill in Spanish translations
const yorubaTranslations = require('../constants/languages/yoruba.json'); // Fill in Yoruba translations

const i18nInstance = i18n.createInstance();

// Initialize i18next instance
i18nInstance.init({
  lng: 'french', // Set the initial language
  fallbackLng: 'english',
  resources: {
    // Add manually loaded translations
    english: { translation: englishTranslations },
    french: { translation: frenchTranslations },
    chinese: { translation: chineseTranslations },
    hausa: { translation: hausaTranslations },
    hindi: { translation: hindiTranslations },
    igbo: { translation: igboTranslations },
    italian: { translation: italianTranslations },
    japanese: { translation: japaneseTranslations },
    korean: { translation: koreanTranslations },
    russian: { translation: russianTranslations },
    spanish: { translation: spanishTranslations },
    yoruba: { translation: yorubaTranslations },
  },
  debug: true, // Enable debugging (optional)
});

export default i18nInstance;
