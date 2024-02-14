import styles from "./ui/styles.module.css"
import ClipboardSVG from "../../shared/ui/SVGs/Clipboard"

const GeneratedCode = () => {
  return (
    <div className={styles["code-container"]}>
      <code></code>
      <button className={styles["copy-to-clipboard"]}>
        <span className="visually-hidden">Copy code to clipboard</span>
        <ClipboardSVG />
      </button>
    </div>
  )
}

export default GeneratedCode
