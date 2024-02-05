const TO_LEFT = "to-left"
const TO_TOP = "to-top"
const TO_RIGHT = "to-right"
const TO_BOTTOM = "to-bottom"

const getRotation = direction => {
  switch (direction) {
    case TO_LEFT:
      return "-90deg"
    case TO_TOP:
      return "0deg"
    case TO_RIGHT:
      return "90deg"
    case TO_BOTTOM:
      return "180deg"
    default:
      return null
  }
}

const ArrowSVG = ({ classList = [], attributes = {}, direction = TO_TOP }) => {
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
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ rotate: getRotation(direction) }}
      {...attributes}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    </svg>
  )
}

export default ArrowSVG
