import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "loading": "Loading...",
      "Details": "Details",
      "Types": "Types",
      "Height": "Height",
      "Weight": "Weight",
      "Basic Abilities": "Basic Abilities",
      "Base Experience": "Base Experience",
      "Statistics": "Statistics"
      // ... weitere englische Übersetzungen
    }
  },
  de: {
    translation: {
      "loading": "Lädt...",
      "Details": "Einzelheiten",
      "Types": "Typen",
      "Height": "Höhe",
      "Weight": "Gewicht",
      "Basic Abilities": "Grundfähigkeiten",
      "Base Experience": "Basiserfahrung",
      "Statistics": "Statistiken"
      // ... weitere deutsche Übersetzungen
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Standardmäßig eingestellte Sprache
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
