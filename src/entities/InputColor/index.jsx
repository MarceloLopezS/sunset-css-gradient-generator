import styles from "./ui/styles.module.css"

const InputColor = () => {
  return (
    <div className={styles["color-group"]}>
      <label className={styles.label}>
        <span className="visually-hidden">Input color</span>
        <input type="color" className={styles.input} />
      </label>
      <span className="text-center">at</span>
      <div className={styles["percentage-container"]}>
        <label className={styles.label}>
          <span className="visually-hidden">Color percentage</span>
          <input
            type="text"
            className={styles.input}
            minLength="1"
            maxLength="3"
          />
        </label>
        <span>%</span>
      </div>
    </div>
  )
}

export default InputColor
