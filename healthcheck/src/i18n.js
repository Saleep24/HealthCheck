import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './i18n/en/translation.json';
import translationES from './i18n/es/translation.json';
import translationZH from './i18n/zh/translation.json';

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: translationEN
        
        },
        es: {
            translation: translationES
        },
        zh: {
            translation: translationZH
        }
    }
});

export default i18n;