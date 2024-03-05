import { getPreferedColorScheme } from "../../utils/functions"
import {
  SHOWN,
  INSIDE_CONTAINER,
  LINEAR,
  TOP_LEFT,
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
    linearDirection: TOP_LEFT,
    radialShape: CIRCLE,
    radialSize: FARTHEST_CORNER,
    radialPosition: CENTER,
    conicStartAngle: DEGREES_0,
    conicPosition: CENTER,
    colors: [
      { id: 1, value: "#fe5810", stop: null },
      { id: 2, value: "#00308f", stop: null }
    ]
  },
  colorFormat: HEX
}

export default initialState