import i18n from 'i18next';

// Manually load translation files
// const englishTranslations = require('../constants/languages/english.json');
import * as englishTranslations from '../constants/languages/english.json';
import * as frenchTranslations from '../constants/languages/french.json';
import * as chineseTranslations from '../constants/languages/chinese.json';
import * as hausaTranslations from '../constants/languages/hausa.json';
import * as hindiTranslations from '../constants/languages/hindi.json';
import * as igboTranslations from '../constants/languages/igbo.json';
import * as italianTranslations from '../constants/languages/italian.json';
import * as japaneseTranslations from '../constants/languages/japanese.json';
import * as koreanTranslations from '../constants/languages/korean.json';
import * as russianTranslations from '../constants/languages/russian.json';
import * as spanishTranslations from '../constants/languages/spanish.json';
import * as yorubaTranslations from '../constants/languages/yoruba.json';

const i18nInstance = i18n.createInstance();

// Initialize i18next instance
i18nInstance.init({
  lng: 'english', // Set the initial language
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
    test: {
      translation: {
        "TEST": 'test',
      },
    },
  },
  debug: true, // Enable debugging (optional)
});

export default i18nInstance;
