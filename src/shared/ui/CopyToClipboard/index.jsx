import { useState } from "react"
import { copyToClipboard } from "../../utils/functions"
import CheckSVG from "../SVGs/Check"
import ClipboardSVG from "../SVGs/Clipboard"
import styles from "./ui/styles.module.css"

const CopyToClipboard = ({ value, valueGetter, className }) => {
  const [coppied, setCoppied] = useState(false)
  const [copyCount, setCopyCount] = useState(0)

  const onClipboardClick = () => {
    if (coppied) return

    setCopyCount(count => count + 1)
    copyToClipboard(value ?? valueGetter())
    setCoppied(true)
    setTimeout(() => {
      setCoppied(false)
    }, 2500)
    return
  }

  return (
    <button
      className={`${styles["copy-to-clipboard"]}${
        className == null ? "" : " " + className
      }`}
      type="button"
      onClick={onClipboardClick}
    >
      <span className="visually-hidden">
        {coppied ? "Coppied!" : "Copy to clipboard"}
      </span>
      {coppied ? (
        <CheckSVG className={copyCount > 0 ? styles["scaleIn"] : null} />
      ) : (
        <ClipboardSVG className={copyCount > 0 ? styles["scaleIn"] : null} />
      )}
    </button>
  )
}

export default CopyToClipboard
