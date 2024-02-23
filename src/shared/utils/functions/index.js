import { THEME, DARK, LIGHT, PREFERS_COLOR_SCHEME_DARK } from "../constants"

export const setLocalStorageItem = (key, item) => {
  return localStorage.setItem(key, JSON.stringify(item))
}

export const getLocalStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const getPreferedColorScheme = () => {
  const localPreference = getLocalStorageItem(THEME)

  if (localPreference) return localPreference

  return window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches
    ? DARK
    : LIGHT
}

export const capitalizeString = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("String is expected to be capitalized.")
  }

  const strings = string.split(" ")
  return strings.map(string => string[0].toUpperCase() + string.substring(1))
    .join(" ")
}

export const toSpaceSeparated = (string, currentSeparator) => {
  if (typeof string !== "string") {
    throw new TypeError("String is expected to be separated.")
  }
  if (typeof currentSeparator !== "string") {
    throw new TypeError("Separator to be replaced must be a string.")
  }

  return string.split(currentSeparator).join(" ")
}