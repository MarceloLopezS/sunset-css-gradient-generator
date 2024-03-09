import {
  getAllUrlSearchParams,
  getPreferedColorScheme,
  getValidatedUrlParam,
  isHexColor
} from "../../utils/functions"
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
  HEX,
  VALID_GRADIENT_STYLES,
  VALID_LINEAR_DIRECTIONS,
  VALID_RADIAL_SHAPES,
  VALID_RADIAL_SIZES,
  VALID_RADIAL_POSITIONS,
  VALID_CONIC_START_ANGLES
} from "../../utils/constants"

const styleFromURL = getValidatedUrlParam("style", VALID_GRADIENT_STYLES)
const linearDirectionFromUrl =
  styleFromURL === LINEAR
  && getValidatedUrlParam("direction", VALID_LINEAR_DIRECTIONS)
const radialShapeFromUrl =
  styleFromURL === RADIAL
  && getValidatedUrlParam("shape", VALID_RADIAL_SHAPES)
const radialSizeFromUrl =
  styleFromURL === RADIAL
  && getValidatedUrlParam("size", VALID_RADIAL_SIZES)
const radialPositionFromUrl =
  styleFromURL === RADIAL
  && getValidatedUrlParam("position", VALID_RADIAL_POSITIONS)
const conicStartAngleFromUrl =
  styleFromURL === CONIC
  && getValidatedUrlParam("startAngle", VALID_CONIC_START_ANGLES)
const colorsFromUrl = getAllUrlSearchParams("color").map(colorString => {
  const [id, value, stop] = colorString.split(" ")
  const formattedValue = isHexColor(`#${value}`) ? `#${value}` : null
  return { id, value: formattedValue, stop }
}).filter(color => color.value != null)

const initialState = {
  theme: getPreferedColorScheme(),
  panelDisplay: SHOWN,
  panelDisplayTogglerPosition: INSIDE_CONTAINER,
  gradientOptions: {
    style: styleFromURL || LINEAR,
    [LINEAR]: {
      direction: linearDirectionFromUrl || BOTTOM_RIGHT,
    },
    [RADIAL]: {
      shape: radialShapeFromUrl || CIRCLE,
      size: radialSizeFromUrl || FARTHEST_CORNER,
      position: radialPositionFromUrl || CENTER
    },
    [CONIC]: {
      startAngle: conicStartAngleFromUrl || DEGREES_0,
      position: CENTER
    },
    colors: colorsFromUrl.length > 1 && colorsFromUrl || [
      { id: 1, value: "#00308f", stop: null },
      { id: 2, value: "#fe5810", stop: null }
    ]
  },
  colorFormat: HEX
}

export default initialState