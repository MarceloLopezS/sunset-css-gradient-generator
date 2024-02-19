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

const FilledArrowSVG = ({ direction = TO_TOP, ...attributes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ rotate: getRotation(direction) }}
      {...attributes}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  )
}

export default FilledArrowSVG
