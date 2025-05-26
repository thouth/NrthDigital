import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en';
import noTranslation from './locales/no';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      no: {
        translation: noTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;