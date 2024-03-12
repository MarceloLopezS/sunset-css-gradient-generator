import { useEffect, useRef } from "react"
import { useStoreData, dispatch } from "../../shared/state/store"
import {
  ADD_COLOR,
  RANDOMIZE_COLOR_VALUES
} from "../../shared/state/config/actions"
import { areDeepEqual } from "../../shared/utils/functions"
import InputColor from "../../entities/InputColor"
import ControlButton from "../../shared/ui/ControlButton"
import PlusInCircle from "../../shared/ui/SVGs/PlusInCircle"
import ColorSnapshotsNavigation from "./ui/ColorSnapshotsNavigation"
import styles from "./ui/styles.module.css"

const ColorControl = () => {
  const lastInputColorRef = useRef(null)
  const colors = useStoreData(state => state.gradientOptions.colors)
  const colorSnapshots = useStoreData(state => state.colorSnapshots)
  const currentSnapshotIndex = colorSnapshots.findIndex(colorSnapshot =>
    areDeepEqual(colorSnapshot, colors)
  )
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  useEffect(() => {
    lastInputColorRef.current.scrollIntoView(false)
  }, [colors])

  return (
    <section>
      <div className={styles["header"]}>
        <p className="text-bold margin-block-end-50">Colors</p>
        {colorSnapshots.length > 1 && (
          <ColorSnapshotsNavigation
            colorSnapshots={colorSnapshots}
            currentSnapshotIndex={currentSnapshotIndex}
            dispatcher={dispatchAction}
          />
        )}
      </div>
      <div className={styles["controls-wrapper"]}>
        <div className={styles["colors-wrapper"]}>
          {colors.map((color, index, array) => {
            const { id, value, stop } = color
            return (
              <InputColor
                key={id}
                id={id}
                value={value}
                stop={stop}
                isDeleteable={array.length > 2}
                ref={index === array.length - 1 ? lastInputColorRef : null}
              />
            )
          })}
        </div>
        <ControlButton
          className={styles["control--add-color"]}
          onClick={dispatchAction(ADD_COLOR)}
        >
          <span className="visually-hidden">Add color</span>
          <PlusInCircle />
        </ControlButton>
        <ControlButton
          onClick={dispatchAction(RANDOMIZE_COLOR_VALUES, {
            currentSnapshotIndex
          })}
        >
          Randomize
        </ControlButton>
      </div>
    </section>
  )
}

export default ColorControl
