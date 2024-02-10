import "./ui/styles.css"
import GeneratedCode from "../../entities/GeneratedCode"
import ColorControl from "../../features/ColorControl"
import OutputFormatControl from "../../features/OutputFormatControl"
import GradientDirectionControl from "../../features/GradientDirectionControl"
import GradientStyleControl from "../../features/GradientStyleControl"
import ControlPanelHeader from "./ui/ControlPanelHeader"
import ControlPanelFooter from "./ui/ControlPanelFooter"

const ControlPanel = () => {
  return (
    <aside className="control-panel">
      <ControlPanelHeader />
      <GradientStyleControl />
      <GradientDirectionControl />
      <ColorControl />
      <OutputFormatControl />
      <GeneratedCode />
      <ControlPanelFooter />
    </aside>
  )
}

export default ControlPanel
