import { useContext } from "react"
import { StoreContext } from "../../shared/state/store"
import styles from "./ui/styles.module.css"
import InputColor from "../../entities/InputColor"
import ControlButton from "../../shared/ui/ControlButton"

const ColorControl = () => {
  const { gradientOptions } = useContext(StoreContext)
  return (
    <section>
      <p className="text-bold margin-block-end-50">Colors</p>
      <div className={styles["colors-wrapper"]}>
        {gradientOptions.colors.map(color => {
          const { id, value, stop } = color
          return (
            <InputColor
              key={id}
              colorId={id}
              colorValue={value}
              colorStop={stop}
              colorStyle={gradientOptions.style}
            />
          )
        })}
        <ControlButton>Randomize</ControlButton>
      </div>
    </section>
  )
}

export default ColorControl
