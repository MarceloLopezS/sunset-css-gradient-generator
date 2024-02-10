import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"
import NarrowArrowSVG from "../../shared/ui/SVGs/NarrowArrow"
import NarrowCircleSVG from "../../shared/ui/SVGs/NarrowCircle"

const GradientDirection = () => {
  return (
    <section>
      <p className="text-bold margin-block-end-50">Direction</p>
      <ButtonGrid>
        <ControlButton>
          <span className="visually-hidden">Top Left</span>
          <NarrowArrowSVG direction="to-top-left" />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Top</span>
          <NarrowArrowSVG direction="to-top" />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Top Right</span>
          <NarrowArrowSVG direction="to-top-right" />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Left</span>
          <NarrowArrowSVG direction="to-left" />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Center</span>
          <NarrowCircleSVG />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Right</span>
          <NarrowArrowSVG direction="to-right" />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Bottom Left</span>
          <NarrowArrowSVG direction="to-bottom-left" />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Bottom</span>
          <NarrowArrowSVG direction="to-bottom" />
        </ControlButton>
        <ControlButton>
          <span className="visually-hidden">Bottom Right</span>
          <NarrowArrowSVG direction="to-bottom-right" />
        </ControlButton>
      </ButtonGrid>
    </section>
  )
}

export default GradientDirection
