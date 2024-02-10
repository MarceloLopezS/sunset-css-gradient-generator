import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const OutputFormatControl = () => {
  return (
    <section>
      <p className="text-bold margin-block-end-50">Output Format</p>
      <ButtonGrid>
        <ControlButton>Hex</ControlButton>
        <ControlButton>RGB</ControlButton>
        <ControlButton>HSL</ControlButton>
      </ButtonGrid>
    </section>
  )
}

export default OutputFormatControl
