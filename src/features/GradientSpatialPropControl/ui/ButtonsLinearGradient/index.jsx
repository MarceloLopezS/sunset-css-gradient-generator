import { EMPTY } from "../../../../shared/utils/constants"
import { LINEAR_DIRECTIONS } from "../../config/spatialProps"
import { SET_LINEAR_DIRECTION } from "../../../../shared/state/config/actions"
import ControlButton from "../../../../shared/ui/ControlButton"
import NarrowArrowSVG from "../../../../shared/ui/SVGs/NarrowArrow"

const ButtonsLinear = ({ currentDirection, dispatcher }) => {
  return (
    <>
      {LINEAR_DIRECTIONS.map(direction => {
        if (direction === EMPTY) return <div key={direction}></div>

        return (
          <ControlButton
            key={direction}
            selected={currentDirection === direction}
            onClick={dispatcher(SET_LINEAR_DIRECTION, { direction })}
          >
            <span className="visually-hidden">{direction}</span>
            <NarrowArrowSVG direction={`to ${direction}`} />
          </ControlButton>
        )
      })}
    </>
  )
}

export default ButtonsLinear
