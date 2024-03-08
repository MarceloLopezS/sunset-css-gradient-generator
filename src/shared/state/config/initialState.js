import { getAllURLSearchParams, getPreferedColorScheme, getURLSearchParam } from "../../utils/functions"
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

const styleFromURL = getURLSearchParam("style")
const linearDirectionFromUrl =
  styleFromURL === LINEAR && getURLSearchParam("direction")
const radialShapeFromUrl =
  styleFromURL === RADIAL && getURLSearchParam("shape")
const radialSizeFromUrl =
  styleFromURL === RADIAL && getURLSearchParam("size")
const radialPositionFromUrl =
  styleFromURL === RADIAL && getURLSearchParam("position")
const conicStartAngleFromUrl =
  styleFromURL === CONIC && getURLSearchParam("startAngle")
const colorsFromUrl = getAllURLSearchParams("color").map(colorString => {
  const [id, value, stop] = colorString.split(" ")

  return { id, value: `#${value}`, stop }
})

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
    colors: colorsFromUrl.length > 0 && colorsFromUrl || [
      { id: 1, value: "#00308f", stop: null },
      { id: 2, value: "#fe5810", stop: null }
    ]
  },
  colorFormat: HEX
}

export default initialState