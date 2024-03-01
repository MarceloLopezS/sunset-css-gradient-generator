import { useStoreData, dispatch } from "../../shared/state/store"
import styles from "./ui/styles.module.css"
import InputColor from "../../entities/InputColor"
import ControlButton from "../../shared/ui/ControlButton"
import { RANDOMIZE_COLOR_VALUES } from "../../shared/state/config/actions"

const ColorControl = () => {
  const style = useStoreData(state => state.gradientOptions.style)
  const colors = useStoreData(state => state.gradientOptions.colors)
  const dispatchAction = () => dispatch({ type: RANDOMIZE_COLOR_VALUES })

  return (
    <section>
      <p className="text-bold margin-block-end-50">Colors</p>
      <div className={styles["colors-wrapper"]}>
        {colors.map(color => {
          const { id, value, stop } = color
          return (
            <InputColor
              key={id}
              colorId={id}
              colorValue={value}
              colorStop={stop}
              colorStyle={style}
            />
          )
        })}
        <ControlButton onClick={dispatchAction}>Randomize</ControlButton>
      </div>
    </section>
  )
}

export default ColorControl
