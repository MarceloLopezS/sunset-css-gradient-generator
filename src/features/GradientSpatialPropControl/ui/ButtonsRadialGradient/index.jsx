import { CENTER } from "../../../../shared/utils/constants"
import { RADIAL_POSITIONS } from "../../config/spatialProps"
import { SET_RADIAL_POSITION } from "../../../../shared/state/config/actions"
import ControlButton from "../../../../shared/ui/ControlButton"
import NarrowCircleSVG from "../../../../shared/ui/SVGs/NarrowCircle"
import NarrowDirectionCircle from "../../../../shared/ui/SVGs/NarrowDirectionCircle"

const ButtonsRadial = ({ currentPosition, dispatcher }) => {
  return (
    <>
      {RADIAL_POSITIONS.map(position => {
        if (position === CENTER)
          return (
            <ControlButton
              key={position}
              selected={currentPosition === position}
              onClick={dispatcher(SET_RADIAL_POSITION, {
                position
              })}
            >
              <span className="visually-hidden">{position}</span>
              <NarrowCircleSVG />
            </ControlButton>
          )

        return (
          <ControlButton
            key={position}
            selected={currentPosition === position}
            onClick={dispatcher(SET_RADIAL_POSITION, {
              position
            })}
          >
            <span className="visually-hidden">{position}</span>
            <NarrowDirectionCircle radialOrigin={position} />
          </ControlButton>
        )
      })}
    </>
  )
}

export default ButtonsRadial
