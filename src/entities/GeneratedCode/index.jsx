import { useRef } from "react"
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
import styles from "./ui/styles.module.css"
import CopyToClipboard from "../../shared/ui/CopyToClipboard"

const GeneratedCode = () => {
  const codeRef = useRef(null)
  const gradientOptions = useStoreData(state => state.gradientOptions)
  const colorFormat = useStoreData(state => state.colorFormat)

  const getCodeText = () => codeRef.current.textContent

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

  return (
    <div className={styles["code-container"]}>
      <code ref={codeRef}>{generateGradient()}</code>
      <CopyToClipboard valueGetter={getCodeText} />
    </div>
  )
}

export default GeneratedCode
