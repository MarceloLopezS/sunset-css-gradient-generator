import { useStoreData } from "../../shared/state/store"
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
  const store = useStoreData(state => state)
  const generateGradientString = pipe(
    setGradientStyle(store),
    appendString("("),
    appendConicStartAngle(store),
    appendRadialShape(store),
    appendRadialSize(store),
    appendGradientPosition(store),
    appendLinearDirection(store),
    appendString(", "),
    appendGradientColors(store),
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
