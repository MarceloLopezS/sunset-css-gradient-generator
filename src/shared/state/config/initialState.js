import { getPreferedColorScheme } from "../../utils/functions"
import { SHOWN, INSIDE_CONTAINER } from "../../utils/constants"

const initialState = {
  theme: getPreferedColorScheme(),
  panelDisplay: SHOWN,
  panelDisplayToggler: {
    position: INSIDE_CONTAINER
  },
  gradientOptions: {
    style: "linear"
  }
}

export default initialState