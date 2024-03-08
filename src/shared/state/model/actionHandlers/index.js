import {
  THEME,
  DARK,
  LIGHT,
  SHOWN,
  HIDDEN,
  OUTSIDE_CONTAINER,
  INSIDE_CONTAINER,
  HEX_COLOR_WHITE,
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
  const linearProps = {
    ...state.gradientOptions[LINEAR], direction
  }
  const gradientOptions = {
    ...state.gradientOptions, [LINEAR]: linearProps
  }

  return { ...state, gradientOptions }
}

export const setRadialShape = (state, action) => {
  const { shape } = action.payload
  const radialProps = {
    ...state.gradientOptions[RADIAL], shape
  }
  const gradientOptions = {
    ...state.gradientOptions, [RADIAL]: radialProps
  }

  return { ...state, gradientOptions }
}

export const setRadialSize = (state, action) => {
  const { size } = action.payload
  const radialProps = {
    ...state.gradientOptions[RADIAL], size
  }
  const gradientOptions = {
    ...state.gradientOptions, [RADIAL]: radialProps
  }

  return { ...state, gradientOptions }
}

export const setRadialPosition = (state, action) => {
  const { position } = action.payload
  const radialProps = {
    ...state.gradientOptions[RADIAL], position
  }
  const gradientOptions = {
    ...state.gradientOptions, [RADIAL]: radialProps
  }

  return { ...state, gradientOptions }
}

export const setConicStartAngle = (state, action) => {
  const { startAngle } = action.payload
  const conicProps = {
    ...state.gradientOptions[CONIC], startAngle
  }
  const gradientOptions = {
    ...state.gradientOptions, [CONIC]: conicProps
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

export const addColor = (state) => {
  const lastColor = state.gradientOptions.colors.at(-1);
  const newColor = { id: lastColor.id + 1, value: HEX_COLOR_WHITE, stop: null }
  const colors = [
    ...state.gradientOptions.colors, newColor
  ]
  const gradientOptions = {
    ...state.gradientOptions, colors
  }

  return { ...state, gradientOptions }
}

export const deleteColor = (state, action) => {
  const { id } = action.payload
  const { colors } = state.gradientOptions
  const updatedColors = colors.filter(color => color.id !== id)
  const gradientOptions = {
    ...state.gradientOptions, colors: updatedColors
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