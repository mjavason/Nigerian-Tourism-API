import { response } from 'express';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

let userPreferredLanguage = response.locals.user.language || 'english';

i18n.use(Backend).init({
  lng: userPreferredLanguage, // Manually set the initial language
  fallbackLng: 'english',
  // Load translations from a specific path, e.g., '/locales/en.json'
  backend: {
    loadPath: '/languages/{{lng}}.json', // Load the user's chosen language
    addPath: '/languages/{{fallbackLng}}.json', // Load the fallback language
  },
  debug: true, // Enable debugging (optional)
});
