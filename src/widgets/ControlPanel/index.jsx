import { useContext } from "react"
import { StoreContext } from "../../shared/state/store"
import styles from "./ui/styles.module.css"
import ControlPanelHeader from "./ui/ControlPanelHeader"
import GradientStyleControl from "../../features/GradientStyleControl"
import GradientDirectionControl from "../../features/GradientDirectionControl"
import ColorControl from "../../features/ColorControl"
import OutputFormatControl from "../../features/OutputFormatControl"
import ControlPanelOutputCode from "./ui/ControlPanelOutputCode"
import ControlPanelFooter from "./ui/ControlPanelFooter"

const ControlPanel = () => {
  const { panelDisplay } = useContext(StoreContext)

  return (
    <aside className={styles["control-panel"]} data-display={panelDisplay}>
      <ControlPanelHeader />
      <GradientStyleControl />
      <GradientDirectionControl />
      <ColorControl />
      <OutputFormatControl />
      <ControlPanelOutputCode />
      <ControlPanelFooter />
    </aside>
  )
}

export default ControlPanel
