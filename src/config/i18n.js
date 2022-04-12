import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const requireAll = requireContext => requireContext.keys().map(requireContext);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    fallbackLng: 'es',
    detection: {
      order: ['navigator']
    },
    interpolation: {
      escapeValue: false
    }
  });

requireAll(require.context('..', true, /i18n\.(js|ts)$/));
