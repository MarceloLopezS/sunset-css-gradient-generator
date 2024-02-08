import "./ui/styles.css"
import ThemeToggler from "../../../../shared/ui/ThemeToggler"
import ControlPanelDisplayToggler from "../ControlPanelDisplayToggler"

const ControlPanelHeader = () => {
  return (
    <header className="control-panel__header">
      <div className="control-panel__togglers-wrapper">
        <ThemeToggler />
        <ControlPanelDisplayToggler />
      </div>
      <h1 className="control-panel__title | text-bold">
        Sunset - CSS Gradient Generator
      </h1>
    </header>
  )
}

export default ControlPanelHeader
