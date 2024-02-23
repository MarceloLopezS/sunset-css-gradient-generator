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
import { setLocalStorageItem } from "../../../utils/functions"

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

export const setRadialPosition = (state, action) => {
  const position = action.payload.position
  const radialParams = {
    ...state.gradientOptions[RADIAL], position
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