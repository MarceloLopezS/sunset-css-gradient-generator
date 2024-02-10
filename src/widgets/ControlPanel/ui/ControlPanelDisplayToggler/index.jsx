import FilledArrowSVG from "../../../../shared/ui/SVGs/FilledArrow"
import "./ui/styles.css"

const ControlPanelDisplayToggler = () => {
  return (
    <button className="control-panel--toggler | toggler-button">
      <span className="visually-hidden">Toggle Panel Display</span>
      <FilledArrowSVG direction="to-left" />
    </button>
  )
}

export default ControlPanelDisplayToggler
