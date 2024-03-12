import {
  BACK,
  FORWARD,
  NEXT,
  PREVIOUS
} from "../../../../shared/utils/constants"
import { NAVIGATE_SNAPSHOTS } from "../../../../shared/state/config/actions"
import HistoryDirectionArrowSVG from "../../../../shared/ui/SVGs/HistoryDirectionArrow"
import styles from "./ui/styles.module.css"

const availableHistoryButtons = [PREVIOUS, NEXT]

const ColorSnapshotsNavigation = ({
  colorSnapshots,
  currentSnapshotIndex,
  dispatcher
}) => {
  const isFirstSnapshot = currentSnapshotIndex === 0
  const isLastSnapshot = currentSnapshotIndex === colorSnapshots.length - 1

  return (
    <div className={styles["snapshots-navigation"]}>
      {availableHistoryButtons.map(availableHistoryButton => {
        return (
          <button
            key={availableHistoryButton}
            className={`${styles["snapshots-navigation__control"]} | accent-icon`}
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
                  : dispatcher(NAVIGATE_SNAPSHOTS, {
                      currentSnapshotIndex,
                      goTo: PREVIOUS
                    })
                : availableHistoryButton === NEXT && isLastSnapshot
                  ? null
                  : dispatcher(NAVIGATE_SNAPSHOTS, {
                      currentSnapshotIndex,
                      goTo: NEXT
                    })
            }
          >
            <span className="visually-hidden">
              {`${availableHistoryButton} color in history`}
            </span>
            <HistoryDirectionArrowSVG
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
  )
}

export default ColorSnapshotsNavigation
