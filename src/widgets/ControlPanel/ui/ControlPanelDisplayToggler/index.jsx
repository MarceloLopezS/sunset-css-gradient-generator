import ArrowSVG from "../../../../shared/ui/SVGs/Arrow"
import "./ui/styles.css"

const ControlPanelDisplayToggler = () => {
  return (
    <button className="control-panel--toggler | toggler-button">
      <span className="visually-hidden">Toggle Panel Display</span>
      <ArrowSVG direction="to-left" />
    </button>
  )
}

export default ControlPanelDisplayToggler
