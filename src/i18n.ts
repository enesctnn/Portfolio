import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    backend: { loadPath: 'locales/{{lng}}/{{ns}}.json' },
  });

export default i18next;
