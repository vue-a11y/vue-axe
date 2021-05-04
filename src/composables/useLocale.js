import translations from '../locales'

export default function useLocale (lang) {
  const translation = translations[lang] || translations.en

  function $t (key, value) {
    return translation[key] || value
  }

  return {
    $t
  }
}
