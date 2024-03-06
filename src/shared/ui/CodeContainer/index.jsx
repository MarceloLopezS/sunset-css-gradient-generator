import { useRef } from "react"
import CopyToClipboard from "../CopyToClipboard"
import styles from "./ui/styles.module.css"

const CodeContainer = ({ children }) => {
  const codeRef = useRef(null)

  const getCodeText = () => codeRef.current.textContent

  return (
    <div className={styles["code-container"]}>
      <code ref={codeRef}>{children}</code>
      <CopyToClipboard
        valueGetter={getCodeText}
        className={styles["code-copy-button"]}
      />
    </div>
  )
}

export default CodeContainer
