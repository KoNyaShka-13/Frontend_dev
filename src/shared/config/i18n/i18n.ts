import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)//Эти use для подключения плагинов
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',//Язык по умолчанию
        debug: __IS_DEV__,//Дебаггер, если режим разработки, то включаем дебаггер

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        }
    });


export default i18n;
