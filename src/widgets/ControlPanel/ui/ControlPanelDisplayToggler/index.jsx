import { useStoreData, dispatch } from "../../../../shared/state/store"
import { TOGGLE_PANEL_DISPLAY } from "../../../../shared/state/config/actions"
import { LEFT } from "../../../../shared/utils/constants"
import FilledArrowSVG from "../../../../shared/ui/SVGs/FilledArrow"
import styles from "./ui/styles.module.css"

const ControlPanelDisplayToggler = () => {
  const panelDisplayTogglerPosition = useStoreData(
    state => state.panelDisplayTogglerPosition
  )
  const dispatchAction = () => dispatch({ type: TOGGLE_PANEL_DISPLAY })

  return (
    <button
      className={`${styles["control-panel--toggler"]} | toggler-button`}
      data-position={panelDisplayTogglerPosition}
      type="button"
      onClick={dispatchAction}
    >
      <span className="visually-hidden">Toggle Panel Display</span>
      <FilledArrowSVG direction={`to ${LEFT}`} />
    </button>
  )
}

export default ControlPanelDisplayToggler
