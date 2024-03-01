import {
  THEME,
  DARK,
  LIGHT,
  PREFERS_COLOR_SCHEME_DARK,
  CONIC,
  RADIAL,
  LINEAR,
  HEX,
  RGB,
  HSL
} from "../constants"

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

export const copyToClipboard = (string) => {
  if (typeof string !== "string") throw new TypeError(
    "Only strings can be coppied to clipboard"
  )

  return navigator.clipboard.writeText(string)
}

export const isHexColor = (string) => {
  if (typeof string !== "string") return false

  const sixDigitHex =
    string.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  const threeDigitHex = string.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)

  return !!sixDigitHex || !!threeDigitHex
}

export const hexToRgb = (hexColor) => {
  if (!isHexColor(hexColor)) throw new Error(
    "Provided argument is not a Hex formated string."
  )

  const sixDigitHex =
    hexColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  const threeDigitHex = hexColor.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)

  if (sixDigitHex?.length > 0) return sixDigitHex.slice(1).reduce((
    acc,
    hexSplit,
    index,
    arr
  ) => {
    if (index === 0) return `${acc}${parseInt(hexSplit, 16)}`
    if (index === arr.length - 1) return `${acc}, ${parseInt(hexSplit, 16)})`

    return `${acc}, ${parseInt(hexSplit, 16)}`
  }, "rgb(")

  if (threeDigitHex?.length > 0) return threeDigitHex.slice(1).reduce((
    acc,
    hexSplit,
    index,
    arr
  ) => {
    if (index === 0) return `${acc}${0x11 * parseInt(hexSplit, 16)}`
    if (index === arr.length - 1) return `${acc}, ${0x11 * parseInt(hexSplit, 16)})`

    return `${acc}, ${0x11 * parseInt(hexSplit, 16)}`
  }, "rgb(")
}

export const hexToHsl = (hexColor) => {
  if (!isHexColor(hexColor)) throw new Error(
    "Provided argument is not a Hex formated string."
  )

  let r, g, b
  const sixDigitHex =
    hexColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  const threeDigitHex = hexColor.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)

  if (sixDigitHex?.length > 0) {
    [r, g, b] = sixDigitHex.slice(1).map((hexSplit) => {
      return parseInt(hexSplit, 16)
    })
  }

  if (threeDigitHex?.length > 0) {
    [r, g, b] = sixDigitHex.slice(1).map((hexSplit) => {
      return 0x11 * parseInt(hexSplit, 16)
    })
  }

  r /= 255
  g /= 255
  b /= 255
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0

  if (delta == 0) h = 0
  else if (cmax == r) h = ((g - b) / delta) % 6
  else if (cmax == g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cmax + cmin) / 2
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = Math.round(+(s * 100))
  l = Math.round(+(l * 100))

  return `hsl(${h}, ${s}%, ${l}%)`
}

export const initGradientStyle = gradientOptions => () => {
  const { style } = gradientOptions
  if (
    style !== RADIAL
    && style !== CONIC
    && style !== LINEAR
  ) return gradientString

  return `${style}-gradient`
}

export const appendString = string => gradientString => {
  return `${gradientString}${string}`
}

export const appendConicStartAngle = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== CONIC) return gradientString

  return `${gradientString}from ${gradientOptions.conicStartAngle}`
}

export const appendRadialShape = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== RADIAL) return gradientString

  return `${gradientString}${gradientOptions.radialShape}`
}

export const appendRadialSize = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== RADIAL) return gradientString

  return `${gradientString} ${gradientOptions.radialSize}`
}

export const appendGradientPosition = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (
    style !== RADIAL
    && style !== CONIC
  ) return gradientString

  return `${gradientString} at ${gradientOptions.radialPosition}`
}

export const appendLinearDirection = gradientOptions => gradientString => {
  const { style } = gradientOptions
  if (style !== LINEAR) return gradientString

  return `${gradientString}to ${gradientOptions.linearDirection}`
}

export const appendGradientColors = gradientOptions => gradientString => {
  const { style, colors, colorFormat } = gradientOptions

  return gradientString + colors.reduce((acc, color, index) => {
    const { value, stop } = color
    const formatedValue = colorFormat == null || colorFormat === HEX
      ? value
      : colorFormat === RGB
        ? hexToRgb(value)
        : colorFormat === HSL && hexToHsl(value)

    if (index === 0)
      return (
        formatedValue + (stop == null
          ? "" : ` ${stop}${style === CONIC ? "deg" : "%"}`)
      )

    return (
      acc +
      ", " +
      formatedValue +
      (stop == null ? "" : ` ${stop}${style === CONIC ? "deg" : "%"}`)
    )
  }, "")
}

const getRandomHexColorComponent = () => {
  const hex = (Math.round(Math.random() * 255)).toString(16)

  return hex.length === 1 ? "0" + hex : hex
}

export const getRandomHexColor = () => {
  return "#" + getRandomHexColorComponent() + getRandomHexColorComponent()
    + getRandomHexColorComponent()
}