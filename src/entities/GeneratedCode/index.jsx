import { useStoreData } from "../../shared/state/store"
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
} from "../../shared/utils/functions"
import CodeContainer from "../../shared/ui/CodeContainer"

const GeneratedCode = () => {
  const gradientOptions = useStoreData(state => state.gradientOptions)
  const colorFormat = useStoreData(state => state.colorFormat)

  const generateGradient = pipe(
    initGradientStyle(gradientOptions),
    appendString("("),
    appendConicStartAngle(gradientOptions),
    appendRadialShape(gradientOptions),
    appendRadialSize(gradientOptions),
    appendGradientPosition(gradientOptions),
    appendLinearDirection(gradientOptions),
    appendString(", "),
    appendGradientColors({ ...gradientOptions, colorFormat }),
    appendString(")")
  )

  return <CodeContainer>{generateGradient()}</CodeContainer>
}

export default GeneratedCode
