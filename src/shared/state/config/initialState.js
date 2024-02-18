import { getPreferedColorScheme } from "../../utils/functions"
import { SHOWN, TO_LEFT, INSIDE_CONTAINER } from "../../utils/constants"

const initialState = {
  theme: getPreferedColorScheme(),
  panelDisplay: SHOWN,
  panelDisplayToggler: {
    direction: TO_LEFT,
    position: INSIDE_CONTAINER
  }
}

export default initialState