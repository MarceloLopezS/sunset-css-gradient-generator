import {
  THEME,
  DARK,
  LIGHT,
  SHOWN,
  HIDDEN,
  INSIDE_CONTAINER,
  OUTSIDE_CONTAINER
} from "../../../utils/constants"
import {
  TOGGLE_THEME,
  TOGGLE_PANEL_DISPLAY,
  SET_GRADIENT_STYLE
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
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer