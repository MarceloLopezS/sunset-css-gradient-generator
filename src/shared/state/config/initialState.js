import { getPreferedColorScheme } from "../../utils/functions"
import {
  SHOWN,
  INSIDE_CONTAINER,
  LINEAR,
  RADIAL,
  CONIC,
  BOTTOM_RIGHT,
  CENTER,
  DEGREES_0,
  CIRCLE,
  FARTHEST_CORNER,
  HEX
} from "../../utils/constants"

const initialState = {
  theme: getPreferedColorScheme(),
  panelDisplay: SHOWN,
  panelDisplayTogglerPosition: INSIDE_CONTAINER,
  gradientOptions: {
    style: LINEAR,
    [LINEAR]: {
      direction: BOTTOM_RIGHT,
    },
    [RADIAL]: {
      shape: CIRCLE,
      size: FARTHEST_CORNER,
      position: CENTER
    },
    [CONIC]: {
      startAngle: DEGREES_0,
      position: CENTER
    },
    colors: [
      { id: 1, value: "#00308f", stop: null },
      { id: 2, value: "#fe5810", stop: null }
    ]
  },
  colorFormat: HEX
}

export default initialState