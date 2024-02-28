import {
  THEME,
  DARK,
  LIGHT,
  SHOWN,
  HIDDEN,
  OUTSIDE_CONTAINER,
  INSIDE_CONTAINER,
  LINEAR,
  RADIAL,
  CONIC
} from "../../../utils/constants"
import { getRandomHexColor, setLocalStorageItem } from "../../../utils/functions"

export const toggleTheme = (state) => {
  const theme = state.theme === DARK ? LIGHT : DARK

  setLocalStorageItem(THEME, theme)

  return { ...state, theme }
}

export const togglePanelDisplay = (state) => {
  const panelDisplay = state.panelDisplay === SHOWN ? HIDDEN : SHOWN
  const position =
    state.panelDisplayToggler.position === INSIDE_CONTAINER
      ? OUTSIDE_CONTAINER
      : INSIDE_CONTAINER
  const panelDisplayToggler = {
    ...state.panelDisplayToggler, position
  }

  return { ...state, panelDisplay, panelDisplayToggler }
}

export const setGradientStyle = (state, action) => {
  const style = action.payload.style
  const gradientOptions = { ...state.gradientOptions, style }

  return { ...state, gradientOptions }
}

export const setLinearDirection = (state, action) => {
  const direction = action.payload.direction
  const linearParams = {
    ...state.gradientOptions[LINEAR], direction
  }
  const gradientOptions = {
    ...state.gradientOptions, [LINEAR]: linearParams
  }

  return { ...state, gradientOptions }
}

export const setRadialProp = (radialProp, state, action) => {
  const payload = action.payload[radialProp];
  const radialParams = {
    ...state.gradientOptions[RADIAL], [radialProp]: payload
  }
  const gradientOptions = {
    ...state.gradientOptions, [RADIAL]: radialParams
  }

  return { ...state, gradientOptions }
}

export const setConicStartAngle = (state, action) => {
  const startAngle = action.payload.startAngle
  const conicParams = {
    ...state.gradientOptions[CONIC], startAngle
  }
  const gradientOptions = {
    ...state.gradientOptions, [CONIC]: conicParams
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
  const gradientOptions = {
    ...state.gradientOptions, colorFormat
  }

  return { ...state, gradientOptions }
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