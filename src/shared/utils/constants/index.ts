export const BASE_URL = "/CSS-gradient-generator/"
export const THEME = "theme"
export const DARK = "dark"
export const LIGHT = "light"
export const PREFERS_COLOR_SCHEME_DARK = `(prefers-color-scheme: ${DARK})`
export const EMPTY = "empty"
export const LEFT = "left"
export const TOP_LEFT = "top left"
export const TOP = "top"
export const TOP_RIGHT = "top right"
export const RIGHT = "right"
export const BOTTOM_RIGHT = "bottom right"
export const BOTTOM = "bottom"
export const BOTTOM_LEFT = "bottom left"
export const CENTER = "center"
export const SHOWN = "shown"
export const HIDDEN = "hidden"
export const INSIDE_CONTAINER = "inside-container"
export const OUTSIDE_CONTAINER = "outside-container"
export const LINEAR = "linear"
export const RADIAL = "radial"
export const CONIC = "conic"
export const DEGREES_0 = "0deg"
export const DEGREES_45 = "45deg"
export const DEGREES_90 = "90deg"
export const DEGREES_135 = "135deg"
export const DEGREES_180 = "180deg"
export const DEGREES_225 = "225deg"
export const DEGREES_270 = "270deg"
export const DEGREES_315 = "315deg"
export const ELLIPSE = "ellipse"
export const CIRCLE = "circle"
export const POSITION = "position"
export const SHAPE = "shape"
export const SIZE = "size"
export const CLOSEST_SIDE = "closest-side"
export const FARTHEST_SIDE = "farthest-side"
export const CLOSEST_CORNER = "closest-corner"
export const FARTHEST_CORNER = "farthest-corner"
export const HEX = "Hex"
export const RGB = "RGB"
export const HSL = "HSL"
export const HEX_COLOR_WHITE = "#ffffff"
export const BACK = "back"
export const FORWARD = "forward"
export const PREVIOUS = "previous"
export const NEXT = "next"
export const VALID_GRADIENT_STYLES = [LINEAR, RADIAL, CONIC] as const
export const VALID_LINEAR_DIRECTIONS = [
  LEFT,
  TOP_LEFT,
  TOP,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM,
  BOTTOM_LEFT
] as const
export const VALID_RADIAL_SHAPES = [ELLIPSE, CIRCLE] as const
export const VALID_RADIAL_SIZES = [
  CLOSEST_SIDE,
  FARTHEST_SIDE,
  CLOSEST_CORNER,
  FARTHEST_CORNER
] as const
export const VALID_RADIAL_POSITIONS = [
  LEFT,
  TOP_LEFT,
  TOP,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  CENTER
] as const
export const VALID_CONIC_START_ANGLES = [
  DEGREES_0,
  DEGREES_45,
  DEGREES_90,
  DEGREES_135,
  DEGREES_180,
  DEGREES_225,
  DEGREES_270,
  DEGREES_315
] as const
