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

  return { ...state, gradientStyle: style }
}

export const setLinearDirection = (state, action) => {
  const { direction } = action.payload

  return { ...state, linearDirection: direction }
}

export const setRadialShape = (state, action) => {
  const { shape } = action.payload

  return { ...state, radialShape: shape }
}

export const setRadialSize = (state, action) => {
  const { size } = action.payload

  return { ...state, radialSize: size }
}

export const setRadialPosition = (state, action) => {
  const { position } = action.payload

  return { ...state, radialPosition: position }
}

export const setConicStartAngle = (state, action) => {
  const { startAngle } = action.payload

  return { ...state, conicStartAngle: startAngle }
}

export const setGradientColor = (state, action) => {
  const { id, value, stop } = action.payload
  const modifiedColor = { id, value, stop }
  const unChangedColors = state.colors
    .filter(color => color.id !== id)
  const colors = [modifiedColor, ...unChangedColors].sort((a, b) => a.id - b.id)

  return { ...state, colors }
}

export const setColorFormat = (state, action) => {
  const { colorFormat } = action.payload

  return { ...state, colorFormat }
}

export const randomizeColorValues = (state) => {
  const { colors } = state
  const newColors = colors.map(color => (
    { ...color, value: getRandomHexColor() }
  ))

  return { ...state, colors: newColors }
}