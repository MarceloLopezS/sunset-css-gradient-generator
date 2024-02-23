import { useContext } from "react"
import { StoreContext } from "../../shared/state/store"
import { RADIAL } from "../../shared/utils/constants"
import styles from "./ui/styles.module.css"
import ControlPanelHeader from "./ui/ControlPanelHeader"
import GradientStyleControl from "../../features/GradientStyleControl"
import GradientDirectionControl from "../../features/GradientDirectionControl"
import ColorControl from "../../features/ColorControl"
import OutputFormatControl from "../../features/OutputFormatControl"
import ControlPanelOutputCode from "./ui/ControlPanelOutputCode"
import ControlPanelFooter from "./ui/ControlPanelFooter"
import GradientRadialShapeControl from "../../features/GradientRadialShapeControl"
import GradientRadialSizeControl from "../../features/GradientRadialSizeControl"

const ControlPanel = () => {
  const { panelDisplay, gradientOptions } = useContext(StoreContext)

  return (
    <aside className={styles["control-panel"]} data-display={panelDisplay}>
      <ControlPanelHeader />
      <GradientStyleControl />
      <GradientDirectionControl />
      {gradientOptions.style === RADIAL && <GradientRadialShapeControl />}
      {gradientOptions.style === RADIAL && <GradientRadialSizeControl />}
      <ColorControl />
      <OutputFormatControl />
      <ControlPanelOutputCode />
      <ControlPanelFooter />
    </aside>
  )
}

export default ControlPanel
