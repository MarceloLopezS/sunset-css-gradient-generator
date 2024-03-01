import {
  THEME,
  DARK,
  LIGHT,
  SHOWN,
  HIDDEN,
  OUTSIDE_CONTAINER,
  INSIDE_CONTAINER
} from "../../../utils/constants"
import { getRandomHexColor, setLocalStorageItem } from "../../../utils/functions"

export const toggleTheme = (state) => {
  const theme = state.theme === DARK ? LIGHT : DARK

  setLocalStorageItem(THEME, theme)

  return { ...state, theme }
}

export const togglePanelDisplay = (state) => {
  const panelDisplay = state.panelDisplay === SHOWN ? HIDDEN : SHOWN
  const panelDisplayTogglerPosition =
    state.panelDisplayTogglerPosition === INSIDE_CONTAINER
      ? OUTSIDE_CONTAINER
      : INSIDE_CONTAINER

  return { ...state, panelDisplay, panelDisplayTogglerPosition }
}

export const setGradientStyle = (state, action) => {
  const { style } = action.payload
  const gradientOptions = {
    ...state.gradientOptions, style
  }

  return { ...state, gradientOptions }
}

export const setLinearDirection = (state, action) => {
  const { direction } = action.payload
  const gradientOptions = {
    ...state.gradientOptions, linearDirection: direction
  }

  return { ...state, gradientOptions }
}

export const setRadialShape = (state, action) => {
  const { shape } = action.payload
  const gradientOptions = {
    ...state.gradientOptions, radialShape: shape
  }

  return { ...state, gradientOptions }
}

export const setRadialSize = (state, action) => {
  const { size } = action.payload
  const gradientOptions = {
    ...state.gradientOptions, radialSize: size
  }

  return { ...state, gradientOptions }
}

export const setRadialPosition = (state, action) => {
  const { position } = action.payload
  const gradientOptions = {
    ...state.gradientOptions, radialPosition: position
  }

  return { ...state, gradientOptions }
}

export const setConicStartAngle = (state, action) => {
  const { startAngle } = action.payload
  const gradientOptions = {
    ...state.gradientOptions, conicStartAngle: startAngle
  }

  return { ...state, gradientOptions }
}

export const setGradientColor = (state, action) => {
  const { id, value, stop } = action.payload
  const modifiedColor = { id, value, stop }
  const unChangedColors = state.gradientOptions.colors
    .filter(color => color.id !== id)
  const colors = [modifiedColor, ...unChangedColors].sort((a, b) => a.id - b.id)

  const gradientOptions = {
    ...state.gradientOptions, colors
  }

  return { ...state, gradientOptions }
}

export const setColorFormat = (state, action) => {
  const { colorFormat } = action.payload

  return { ...state, colorFormat }
}

export const randomizeColorValues = (state) => {
  const { colors } = state.gradientOptions
  const newColors = colors.map(color => (
    { ...color, value: getRandomHexColor() }
  ))
  const gradientOptions = {
    ...state.gradientOptions, colors: newColors
  }

  return { ...state, gradientOptions }
}