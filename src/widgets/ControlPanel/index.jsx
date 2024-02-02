import GeneratedCode from "../../entities/GeneratedCode"
import ColorControl from "../../features/ColorControl"
import OutputFormat from "../../features/OutputFormat"
import GradientDirection from "../../features/GradientDirection"
import GradientStyle from "../../features/GradientStyle"
import ControlPanelDisplayToggler from "./ui/ControlPanelDisplayToggler"
import ControlPanelHeader from "./ui/ControlPanelHeader"
import ControlPanelFooter from "./ui/ControlPanelFooter"

const ControlPanel = () => {
  return (
    <aside>
      <ControlPanelDisplayToggler />
      <ControlPanelHeader />
      <GradientStyle />
      <GradientDirection />
      <ColorControl />
      <OutputFormat />
      <GeneratedCode />
      <ControlPanelFooter />
    </aside>
  )
}

export default ControlPanel
