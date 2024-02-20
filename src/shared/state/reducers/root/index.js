import {
  THEME,
  DARK,
  LIGHT,
  SHOWN,
  HIDDEN,
  INSIDE_CONTAINER,
  OUTSIDE_CONTAINER,
} from "../../../utils/constants"
import {
  TOGGLE_THEME,
  TOGGLE_PANEL_DISPLAY,
  SET_GRADIENT_STYLE,
  SET_LINEAR_DIRECTION,
  SET_RADIAL_POSITION
} from "../../config/actions"
import { setLocalStorageItem } from "../../../utils/functions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = state.theme === DARK ? LIGHT : DARK

      setLocalStorageItem(THEME, theme)

      return { ...state, theme }
    }
    case TOGGLE_PANEL_DISPLAY: {
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
    case SET_GRADIENT_STYLE: {
      const style = action.payload.style
      const gradientOptions = { ...state.gradientOptions, style }

      return { ...state, gradientOptions }
    }
    case SET_LINEAR_DIRECTION: {
      const direction = action.payload.direction
      const linearParams = {
        ...state.gradientOptions.linearParams, direction
      }
      const gradientOptions = {
        ...state.gradientOptions, linearParams
      }

      return { ...state, gradientOptions }
    }
    case SET_RADIAL_POSITION: {
      const position = action.payload.position
      const radialParams = {
        ...state.gradientOptions.radialParams, position
      }
      const gradientOptions = {
        ...state.gradientOptions, radialParams
      }

      return { ...state, gradientOptions }
    }
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer