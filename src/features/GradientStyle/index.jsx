import "./ui/styles.css"
import Button from "../../shared/ui/Button"

const GradientStyle = () => {
  return (
    <section className="control-panel__styles">
      <p className="text-bold">Style</p>
      <div className="control-panel__styles-controls">
        <Button>Linear</Button>
        <Button>Circular</Button>
        <Button>Conic</Button>
      </div>
    </section>
  )
}

export default GradientStyle
