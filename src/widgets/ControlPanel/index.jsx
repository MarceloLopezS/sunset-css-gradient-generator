import { useStoreData } from "@/shared/state/store"
import GradientStyleControl from "@/features/GradientStyleControl"
import GradientSpatialPropControl from "@/features/GradientSpatialPropControl"
import ColorControl from "@/features/ColorControl"
import OutputFormatControl from "@/features/OutputFormatControl"
import ControlPanelHeader from "./ui/ControlPanelHeader"
import ControlPanelRadialExtraProps from "./ui/ControlPanelRadialExtraProps"
import ControlPanelOutputCode from "./ui/ControlPanelOutputCode"
import ControlPanelFooter from "./ui/ControlPanelFooter"
import styles from "./ui/styles.module.css"

const ControlPanel = () => {
  const panelDisplay = useStoreData(state => state.panelDisplay)

  return (
    <aside className={styles["control-panel"]} data-display={panelDisplay}>
      <ControlPanelHeader />
      <GradientStyleControl />
      <GradientSpatialPropControl />
      <ControlPanelRadialExtraProps />
      <ColorControl />
      <OutputFormatControl />
      <ControlPanelOutputCode />
      <ControlPanelFooter />
    </aside>
  )
}

export default ControlPanel
