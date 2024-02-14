import "./ui/styles.css"
import ControlPanelHeader from "./ui/ControlPanelHeader"
import GradientStyleControl from "../../features/GradientStyleControl"
import GradientDirectionControl from "../../features/GradientDirectionControl"
import ColorControl from "../../features/ColorControl"
import OutputFormatControl from "../../features/OutputFormatControl"
import ControlPanelOutputCode from "./ui/ControlPanelOutputCode"
import ControlPanelFooter from "./ui/ControlPanelFooter"

const ControlPanel = () => {
  return (
    <aside className="control-panel">
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
