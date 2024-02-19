import { useContext } from "react"
import {
  StoreContext,
  StoreDispatchContext
} from "../../../../shared/state/store"
import { TOGGLE_PANEL_DISPLAY } from "../../../../shared/state/config/actions"
import { TO_LEFT } from "../../../../shared/utils/constants"
import FilledArrowSVG from "../../../../shared/ui/SVGs/FilledArrow"
import styles from "./ui/styles.module.css"

const action = {
  type: TOGGLE_PANEL_DISPLAY
}

const ControlPanelDisplayToggler = () => {
  const { panelDisplayToggler } = useContext(StoreContext)
  const dispatch = useContext(StoreDispatchContext)

  const dispatchAction = () => {
    dispatch(action)
  }

  return (
    <button
      className={`${styles["control-panel--toggler"]} | toggler-button`}
      data-position={panelDisplayToggler.position}
      onClick={dispatchAction}
    >
      <span className="visually-hidden">Toggle Panel Display</span>
      <FilledArrowSVG direction={TO_LEFT} />
    </button>
  )
}

export default ControlPanelDisplayToggler
