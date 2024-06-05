import { useStoreData } from "@/shared/state/store"
import {
  pipe,
  initGradientStyle,
  appendString,
  appendConicStartAngle,
  appendRadialShape,
  appendRadialSize,
  appendGradientPosition,
  appendLinearDirection,
  appendGradientColors
} from "@/shared/utils/functions"

const GradientDisplay = () => {
  const gradientOptions = useStoreData(state => state.gradientOptions)
  const generateGradientString = pipe(
    initGradientStyle(gradientOptions),
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
