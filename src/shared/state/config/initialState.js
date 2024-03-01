import { getPreferedColorScheme } from "../../utils/functions"
import {
  SHOWN,
  INSIDE_CONTAINER,
  LINEAR,
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
    linearDirection: BOTTOM_RIGHT,
    radialShape: CIRCLE,
    radialSize: FARTHEST_CORNER,
    radialPosition: CENTER,
    conicStartAngle: DEGREES_0,
    conicPosition: CENTER,
    colors: [
      { id: 1, value: "#e6890f", stop: null },
      { id: 2, value: "#0c75a6", stop: null }
    ]
  },
  colorFormat: HEX
}

export default initialState