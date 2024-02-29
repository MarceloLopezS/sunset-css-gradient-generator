import { useRef } from "react"
import { useStoreData } from "../../shared/state/store"
import ClipboardSVG from "../../shared/ui/SVGs/Clipboard"
import {
  pipe,
  setGradientStyle,
  appendString,
  appendConicStartAngle,
  appendRadialShape,
  appendRadialSize,
  appendGradientPosition,
  appendLinearDirection,
  appendGradientColors,
  copyToClipboard
} from "../../shared/utils/functions"
import styles from "./ui/styles.module.css"

const GeneratedCode = () => {
  const codeRef = useRef(null)
  const store = useStoreData(state => state)
  const generateGradient = pipe(
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

  const onClipboardClick = () => copyToClipboard(codeRef.current.textContent)

  return (
    <div className={styles["code-container"]}>
      <code ref={codeRef}>{generateGradient()}</code>
      <button
        className={styles["copy-to-clipboard"]}
        onClick={onClipboardClick}
      >
        <span className="visually-hidden">Copy code to clipboard</span>
        <ClipboardSVG />
      </button>
    </div>
  )
}

export default GeneratedCode
