import { computed, onMounted } from 'vue'

type ThemeMode = 'light' | 'dark'

const THEME_STORAGE_KEY = 'liubinnn-theme'

const getFallbackTheme = (): ThemeMode => {
  const hour = new Date().getHours()
  return hour >= 18 ? 'dark' : 'light'
}

const applyThemeToDocument = (theme: ThemeMode) => {
  if (!import.meta.client) {
    return
  }

  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme
  root.style.colorScheme = theme
}

export const useTheme = () => {
  const theme = useState<ThemeMode>('theme', () => 'light')
  const ready = useState<boolean>('theme-ready', () => false)

  const setTheme = (value: ThemeMode) => {
    theme.value = value
    applyThemeToDocument(value)

    if (import.meta.client) {
      localStorage.setItem(THEME_STORAGE_KEY, value)
    }
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const initialTheme = storedTheme === 'dark' || storedTheme === 'light'
      ? storedTheme
      : (document.documentElement.dataset.theme as ThemeMode | undefined) ?? getFallbackTheme()

    setTheme(initialTheme)
    ready.value = true
  })

  return {
    theme: computed(() => theme.value),
    isDark: computed(() => theme.value === 'dark'),
    ready: computed(() => ready.value),
    setTheme,
    toggleTheme
  }
}
