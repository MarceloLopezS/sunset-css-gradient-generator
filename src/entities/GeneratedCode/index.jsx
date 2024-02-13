import styles from "./ui/styles.module.css"
import ClipboardSVG from "../../shared/ui/SVGs/Clipboard"

const GeneratedCode = () => {
  return (
    <section>
      <p className="text-bold margin-block-end-50">Generated Code</p>
      <div className={styles["code-container"]}>
        <code></code>
        <button className={styles["copy-to-clipboard"]}>
          <span className="visually-hidden">Copy code to clipboard</span>
          <ClipboardSVG />
        </button>
      </div>
    </section>
  )
}

export default GeneratedCode
