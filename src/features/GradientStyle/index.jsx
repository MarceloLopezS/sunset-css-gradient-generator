import ButtonGrid from "../../shared/ui/ButtonGrid"
import Button from "../../shared/ui/Button"

const GradientStyle = () => {
  return (
    <section className="control-panel__styles">
      <p className="text-bold margin-block-end-50">Style</p>
      <ButtonGrid>
        <Button>Linear</Button>
        <Button>Circular</Button>
        <Button>Conic</Button>
      </ButtonGrid>
    </section>
  )
}

export default GradientStyle
