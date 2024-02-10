const TO_LEFT = "to-left"
const TO_TOP_LEFT = "to-top-left"
const TO_TOP = "to-top"
const TO_TOP_RIGHT = "to-top-right"
const TO_RIGHT = "to-right"
const TO_BOTTOM_RIGHT = "to-bottom-right"
const TO_BOTTOM = "to-bottom"
const TO_BOTTOM_LEFT = "to-bottom-left"

const getRotation = direction => {
  switch (direction) {
    case TO_BOTTOM_LEFT:
      return "-135deg"
    case TO_LEFT:
      return "-90deg"
    case TO_TOP_LEFT:
      return "-45deg"
    case TO_TOP:
      return "0deg"
    case TO_TOP_RIGHT:
      return "45deg"
    case TO_RIGHT:
      return "90deg"
    case TO_BOTTOM_RIGHT:
      return "135deg"
    case TO_BOTTOM:
      return "180deg"
    default:
      return null
  }
}

const NarrowArrowSVG = ({
  classList = [],
  attributes = {},
  direction = TO_TOP
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={
        classList.length > 0
          ? classList.reduce((acc, className) => `${acc} ${className}`)
          : null
      }
      width="16"
      height="16"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ rotate: getRotation(direction) }}
      {...attributes}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M18 11l-6 -6" />
      <path d="M6 11l6 -6" />
    </svg>
  )
}

export default NarrowArrowSVG
