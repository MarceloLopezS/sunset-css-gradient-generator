import { THEME, DARK, LIGHT } from "../../../utils/constants"
import { TOGGLE_THEME } from "../../config/actions"
import { setLocalStorageItem } from "../../../utils/functions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = state.theme === DARK ? LIGHT : DARK;

      setLocalStorageItem(THEME, theme)

      return { ...state, theme }
    }
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer