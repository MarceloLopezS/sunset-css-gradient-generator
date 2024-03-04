import { useStoreData, dispatch } from "../../shared/state/store"
import {
  ADD_COLOR,
  RANDOMIZE_COLOR_VALUES
} from "../../shared/state/config/actions"
import InputColor from "../../entities/InputColor"
import ControlButton from "../../shared/ui/ControlButton"
import PlusInCircle from "../../shared/ui/SVGs/PlusInCircle"
import styles from "./ui/styles.module.css"

const ColorControl = () => {
  const style = useStoreData(state => state.gradientOptions.style)
  const colors = useStoreData(state => state.gradientOptions.colors)
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <p className="text-bold margin-block-end-50">Colors</p>
      <div className={styles["controls-wrapper"]}>
        <div className={styles["colors-wrapper"]}>
          {colors.map((color, index, array) => {
            const { id, value, stop } = color
            return (
              <InputColor
                key={id}
                colorId={id}
                colorValue={value}
                colorStop={stop}
                colorStyle={style}
                isDeleteable={array.length > 2}
              />
            )
          })}
        </div>
        <ControlButton onClick={dispatchAction(ADD_COLOR)}>
          <span className="visually-hidden">Add color</span>
          <PlusInCircle />
        </ControlButton>
        <ControlButton onClick={dispatchAction(RANDOMIZE_COLOR_VALUES)}>
          Randomize
        </ControlButton>
      </div>
    </section>
  )
}

export default ColorControl
