import { getPreferedColorScheme } from "../../utils/functions"
import {
  SHOWN,
  INSIDE_CONTAINER,
  LINEAR,
  RADIAL,
  TO_TOP_LEFT,
  CENTER
} from "../../utils/constants"

const initialState = {
  theme: getPreferedColorScheme(),
  panelDisplay: SHOWN,
  panelDisplayToggler: {
    position: INSIDE_CONTAINER
  },
  gradientOptions: {
    style: LINEAR,
    linearParams: {
      direction: TO_TOP_LEFT
    },
    radialParams: {
      position: CENTER
    }
  }
}

export default initialState