import { useContext } from "react"
import { StoreContext } from "../../shared/state/store"
import {
  pipe,
  setGradientStyle,
  appendString,
  appendConicStartAngle,
  appendRadialShape,
  appendRadialSize,
  appendGradientPosition,
  appendLinearDirection,
  appendGradientColors
} from "../../shared/utils/functions"

const GradientDisplay = () => {
  const { gradientOptions } = useContext(StoreContext)
  const generateGradientString = pipe(
    setGradientStyle(gradientOptions),
    appendString("("),
    appendConicStartAngle(gradientOptions),
    appendRadialShape(gradientOptions),
    appendRadialSize(gradientOptions),
    appendGradientPosition(gradientOptions),
    appendLinearDirection(gradientOptions),
    appendString(", "),
    appendGradientColors(gradientOptions),
    appendString(")")
  )

  return (
    <section
      style={{
        background: generateGradientString()
      }}
    ></section>
  )
}

export default GradientDisplay
