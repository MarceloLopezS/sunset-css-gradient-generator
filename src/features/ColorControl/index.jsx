import { useStoreData, dispatch } from "../../shared/state/store"
import {
  ADD_COLOR,
  NAVIGATE_SNAPSHOTS,
  RANDOMIZE_COLOR_VALUES
} from "../../shared/state/config/actions"
import { areDeepEqual } from "../../shared/utils/functions"
import { BACK, FORWARD, NEXT, PREVIOUS } from "../../shared/utils/constants"
import HistoryDirectionArrow from "../../shared/ui/SVGs/HistoryDirectionArrow"
import InputColor from "../../entities/InputColor"
import ControlButton from "../../shared/ui/ControlButton"
import PlusInCircle from "../../shared/ui/SVGs/PlusInCircle"
import styles from "./ui/styles.module.css"

const availableHistoryButtons = [PREVIOUS, NEXT]

const ColorControl = () => {
  const style = useStoreData(state => state.gradientOptions.style)
  const colors = useStoreData(state => state.gradientOptions.colors)
  const colorSnapshots = useStoreData(state => state.colorSnapshots)
  const currentSnapshotIndex = colorSnapshots.findIndex(colorSnapshot =>
    areDeepEqual(colorSnapshot, colors)
  )
  const isFirstSnapshot = currentSnapshotIndex === 0
  const isLastSnapshot = currentSnapshotIndex === colorSnapshots.length - 1
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <div className={styles["header"]}>
        <p className="text-bold margin-block-end-50">Colors</p>
        {colorSnapshots.length > 1 && (
          <div className={styles["history-controls-wrapper"]}>
            {availableHistoryButtons.map(availableHistoryButton => {
              return (
                <button
                  key={availableHistoryButton}
                  className={`${styles["history-control-button"]} | accent-icon`}
                  disabled={
                    availableHistoryButton === PREVIOUS
                      ? isFirstSnapshot
                        ? true
                        : null
                      : availableHistoryButton === NEXT && isLastSnapshot
                        ? true
                        : null
                  }
                  onClick={
                    availableHistoryButton === PREVIOUS
                      ? isFirstSnapshot
                        ? null
                        : dispatchAction(NAVIGATE_SNAPSHOTS, {
                            currentSnapshotIndex,
                            goTo: PREVIOUS
                          })
                      : availableHistoryButton === NEXT && isLastSnapshot
                        ? null
                        : dispatchAction(NAVIGATE_SNAPSHOTS, {
                            currentSnapshotIndex,
                            goTo: NEXT
                          })
                  }
                >
                  <span className="visually-hidden">
                    {`${availableHistoryButton} color in history`}
                  </span>
                  <HistoryDirectionArrow
                    direction={
                      availableHistoryButton === PREVIOUS
                        ? BACK
                        : availableHistoryButton === NEXT && FORWARD
                    }
                  />
                </button>
              )
            })}
          </div>
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
                stopStyle={style}
                isDeleteable={array.length > 2}
              />
            )
          })}
        </div>
        <ControlButton onClick={dispatchAction(ADD_COLOR)}>
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
