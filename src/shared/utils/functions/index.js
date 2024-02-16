export const setLocalStorageItem = (key, item) => {
  return localStorage.setItem(key, JSON.stringify(item))
}

export const getLocalStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const getPreferedColorScheme = () => {
  const DARK = "dark"
  const LIGHT = "light"
  const MEDIA_QUERY = `(prefers-color-scheme: ${DARK})`
  const THEME = "theme"

  const localPreference = getLocalStorageItem(THEME)

  if (localPreference) return localPreference

  return window.matchMedia(MEDIA_QUERY).matches
    ? DARK
    : LIGHT
}