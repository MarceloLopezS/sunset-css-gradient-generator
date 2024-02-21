const LEFT = "left"
const TOP_LEFT = "top-left"
const TOP = "top"
const TOP_RIGHT = "top-right"
const RIGHT = "right"
const BOTTOM_RIGHT = "bottom-right"
const BOTTOM = "bottom"
const BOTTOM_LEFT = "bottom-left"

const getRadialDirection = radialOrigin => {
  switch (radialOrigin) {
    case BOTTOM_LEFT:
      return "45deg"
    case LEFT:
      return "90deg"
    case TOP_LEFT:
      return "135deg"
    case TOP:
      return "180deg"
    case TOP_RIGHT:
      return "-135deg"
    case RIGHT:
      return "-90deg"
    case BOTTOM_RIGHT:
      return "-45deg"
    case BOTTOM:
      return "0deg"
    default:
      return null
  }
}

const NarrowDirectionCircle = ({ radialOrigin, ...attributes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ rotate: getRadialDirection(radialOrigin) }}
      {...attributes}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728z" />
      <path d="M16.243 7.757a6 6 0 0 0 -8.486 0" />
    </svg>
  )
}

export default NarrowDirectionCircle
