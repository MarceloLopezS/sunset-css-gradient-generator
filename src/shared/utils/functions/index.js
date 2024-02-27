import { THEME, DARK, LIGHT, PREFERS_COLOR_SCHEME_DARK, CONIC, RADIAL, LINEAR } from "../constants"

export const pipe = (...fns) => (value) => {
  return fns.reduce((acc, fn) => fn(acc), value)
}

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

export const setGradientStyle = gradientOptions => () => {
  const { style } = gradientOptions
  if (
    style !== RADIAL && style !== CONIC && style !== LINEAR
  ) return gradientString

  return `${style}-gradient`
}

export const appendString = string => gradientString => {
  return `${gradientString}${string}`
}

export const appendConicStartAngle = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== CONIC) return gradientString

  return `${gradientString}from ${gradientOptions[style].startAngle}`
}

export const appendRadialShape = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== RADIAL) return gradientString

  return `${gradientString}${gradientOptions[style].shape}`
}

export const appendRadialSize = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== RADIAL) return gradientString

  return `${gradientString} ${gradientOptions[style].size}`
}

export const appendGradientPosition = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== RADIAL && style !== CONIC) return gradientString

  return `${gradientString} at ${gradientOptions[style].position}`
}

export const appendLinearDirection = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== LINEAR) return gradientString

  return `${gradientString}to ${gradientOptions[style].direction}`
}

export const appendGradientColors = gradientOptions => gradientString => {
  const { style, colors } = gradientOptions

  return gradientString + colors.reduce((acc, color, index) => {
    const { value, stop } = color
    if (index === 0)
      return (
        value + (stop == null ? "" : ` ${stop}${style === CONIC ? "deg" : "%"}`)
      )

    return (
      acc +
      ", " +
      value +
      (stop == null ? "" : ` ${stop}${style === CONIC ? "deg" : "%"}`)
    )
  }, "")
}