import { getPreferedColorScheme } from "../../utils/functions"
import {
  SHOWN,
  INSIDE_CONTAINER,
  LINEAR,
  TO_TOP_LEFT,
  CENTER,
  DEGREES_0,
  RADIAL,
  CONIC,
  CIRCLE,
  FARTHEST_CORNER
} from "../../utils/constants"

const initialState = {
  theme: getPreferedColorScheme(),
  panelDisplay: SHOWN,
  panelDisplayToggler: {
    position: INSIDE_CONTAINER
  },
  gradientOptions: {
    style: LINEAR,
    [LINEAR]: {
      direction: TO_TOP_LEFT
    },
    [RADIAL]: {
      shape: CIRCLE,
      size: FARTHEST_CORNER,
      position: CENTER
    },
    [CONIC]: {
      startAngle: DEGREES_0
    }
  }
}

export default initialState