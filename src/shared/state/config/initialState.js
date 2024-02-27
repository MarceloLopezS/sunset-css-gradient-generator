import { getPreferedColorScheme } from "../../utils/functions"
import {
  SHOWN,
  INSIDE_CONTAINER,
  LINEAR,
  BOTTOM_RIGHT,
  CENTER,
  DEGREES_0,
  RADIAL,
  CONIC,
  CIRCLE,
  FARTHEST_CORNER,
  HEX
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
      direction: BOTTOM_RIGHT
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
      { id: 1, value: "#e6890f", stop: null },
      { id: 2, value: "#0c75a6", stop: null }
    ],
    colorFormat: HEX
  }
}

export default initialState