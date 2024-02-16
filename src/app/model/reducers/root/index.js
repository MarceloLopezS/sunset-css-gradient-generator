import { TOGGLE_THEME } from "../../../config/actions";
import { setLocalStorageItem } from "../../../../shared/utils/functions"

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = state.theme === "dark" ? "light" : "dark";

      setLocalStorageItem("theme", theme)

      return { ...state, theme }
    }
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer