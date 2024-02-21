import { getPreferedColorScheme } from "../../utils/functions"
import {
  SHOWN,
  INSIDE_CONTAINER,
  LINEAR,
  TO_TOP_LEFT,
  CENTER,
  DEGREES_0
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
    },
    conicParams: {
      startAngle: DEGREES_0
    }
  }
}

export default initialState