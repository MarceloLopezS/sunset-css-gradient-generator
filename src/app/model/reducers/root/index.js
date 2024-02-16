import { TOGGLE_THEME } from "../../../config/actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = state.theme === "dark" ? "light" : "dark";

      return { ...state, theme }
    }
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer