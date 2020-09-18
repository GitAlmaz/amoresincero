import store from '../store'
import ru from '../locales/ru.json'
import en from '../locales/en.json'
import it from '../locales/it.json'
import es from '../locales/es.json'

const locales = {
  'ru-RU': ru,
  'en-US': en,
  'it-IT': it,
  'es-ES': es
}

export default function localizeFilter(key) {
	const locale = store.getters.appInfo.locale || 'ru-RU'
  return locales[locale][key] || `[Localize error: key ${key} not found]`
}
