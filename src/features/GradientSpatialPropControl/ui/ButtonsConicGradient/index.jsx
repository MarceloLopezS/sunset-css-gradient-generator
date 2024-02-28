import { EMPTY } from "../../../../shared/utils/constants"
import { CONIC_START_ANGLES } from "../../config/spatialProps"
import { SET_CONIC_START_ANGLE } from "../../../../shared/state/config/actions"
import ControlButton from "../../../../shared/ui/ControlButton"
import NarrowStartFromArrow from "../../../../shared/ui/SVGs/NarrowStartFromArrow"

const ButtonsConicGradient = ({ currentStartAngle, dispatcher }) => {
  return (
    <>
      {CONIC_START_ANGLES.map(startAngle => {
        if (startAngle === EMPTY) return <div key={startAngle}></div>

        return (
          <ControlButton
            key={startAngle}
            selected={currentStartAngle === startAngle}
            onClick={dispatcher(SET_CONIC_START_ANGLE, {
              startAngle
            })}
          >
            <span className="visually-hidden">{startAngle}</span>
            <NarrowStartFromArrow inclination={startAngle} />
          </ControlButton>
        )
      })}
    </>
  )
}

export default ButtonsConicGradient
