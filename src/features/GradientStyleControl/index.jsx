import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const GradientStyleControl = () => {
  return (
    <section className="control-panel__styles">
      <p className="text-bold margin-block-end-50">Style</p>
      <ButtonGrid>
        <ControlButton>Linear</ControlButton>
        <ControlButton>Circular</ControlButton>
        <ControlButton>Conic</ControlButton>
      </ButtonGrid>
    </section>
  )
}

export default GradientStyleControl
