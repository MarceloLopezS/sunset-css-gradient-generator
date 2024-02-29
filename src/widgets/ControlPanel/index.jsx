import { useStoreData } from "../../shared/state/store"
import { RADIAL } from "../../shared/utils/constants"
import styles from "./ui/styles.module.css"
import ControlPanelHeader from "./ui/ControlPanelHeader"
import GradientStyleControl from "../../features/GradientStyleControl"
import GradientSpatialPropControl from "../../features/GradientSpatialPropControl"
import ColorControl from "../../features/ColorControl"
import OutputFormatControl from "../../features/OutputFormatControl"
import ControlPanelOutputCode from "./ui/ControlPanelOutputCode"
import ControlPanelFooter from "./ui/ControlPanelFooter"
import GradientRadialShapeControl from "../../features/GradientRadialShapeControl"
import GradientRadialSizeControl from "../../features/GradientRadialSizeControl"

const ControlPanel = () => {
  const panelDisplay = useStoreData(state => state.panelDisplay)
  const style = useStoreData(state => state.gradientStyle)

  return (
    <aside className={styles["control-panel"]} data-display={panelDisplay}>
      <ControlPanelHeader />
      <GradientStyleControl />
      <GradientSpatialPropControl />
      {style === RADIAL && <GradientRadialShapeControl />}
      {style === RADIAL && <GradientRadialSizeControl />}
      <ColorControl />
      <OutputFormatControl />
      <ControlPanelOutputCode />
      <ControlPanelFooter />
    </aside>
  )
}

export default ControlPanel
