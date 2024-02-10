import styles from "./ui/styles.module.css"
import InputColor from "../../entities/InputColor"
import ControlButton from "../../shared/ui/ControlButton"

const ColorControl = () => {
  return (
    <section>
      <p className="text-bold margin-block-end-50">Colors</p>
      <div className={styles["colors-wrapper"]}>
        <InputColor />
        <InputColor />
        <ControlButton>Randomize</ControlButton>
      </div>
    </section>
  )
}

export default ColorControl
