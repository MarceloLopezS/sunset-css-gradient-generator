import { POSITION, SHAPE, SIZE } from "../../../utils/constants"
import {
  TOGGLE_THEME,
  TOGGLE_PANEL_DISPLAY,
  SET_GRADIENT_STYLE,
  SET_LINEAR_DIRECTION,
  SET_RADIAL_POSITION,
  SET_CONIC_START_ANGLE,
  SET_RADIAL_SHAPE,
  SET_RADIAL_SIZE,
  SET_GRADIENT_COLOR,
  SET_COLOR_FORMAT,
  RANDOMIZE_COLOR_VALUES
} from "../../config/actions"
import {
  toggleTheme,
  togglePanelDisplay,
  setGradientStyle,
  setLinearDirection,
  setRadialProp,
  setConicStartAngle,
  setGradientColor,
  setColorFormat,
  randomizeColorValues
} from "../../model/actionHandlers"

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return toggleTheme(state)
    case TOGGLE_PANEL_DISPLAY:
      return togglePanelDisplay(state)
    case SET_GRADIENT_STYLE:
      return setGradientStyle(state, action)
    case SET_LINEAR_DIRECTION:
      return setLinearDirection(state, action)
    case SET_RADIAL_POSITION:
      return setRadialProp(POSITION, state, action)
    case SET_RADIAL_SHAPE:
      return setRadialProp(SHAPE, state, action)
    case SET_RADIAL_SIZE:
      return setRadialProp(SIZE, state, action)
    case SET_CONIC_START_ANGLE:
      return setConicStartAngle(state, action)
    case SET_GRADIENT_COLOR:
      return setGradientColor(state, action)
    case SET_COLOR_FORMAT:
      return setColorFormat(state, action)
    case RANDOMIZE_COLOR_VALUES:
      return randomizeColorValues(state)
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer