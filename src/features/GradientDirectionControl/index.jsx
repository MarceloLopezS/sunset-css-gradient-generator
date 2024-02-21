import { useContext } from "react"
import {
  LINEAR_DIRECTIONS,
  RADIAL_POSITIONS,
  CONIC_START_ANGLES
} from "./config/directions"
import {
  EMPTY,
  CENTER,
  LINEAR,
  RADIAL,
  CONIC
} from "../../shared/utils/constants"
import { StoreContext, StoreDispatchContext } from "../../shared/state/store"
import {
  SET_LINEAR_DIRECTION,
  SET_RADIAL_POSITION,
  SET_CONIC_START_ANGLE
} from "../../shared/state/config/actions"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"
import NarrowArrowSVG from "../../shared/ui/SVGs/NarrowArrow"
import NarrowCircleSVG from "../../shared/ui/SVGs/NarrowCircle"
import NarrowDirectionCircle from "../../shared/ui/SVGs/NarrowDirectionCircle"
import NarrowStartFromArrow from "../../shared/ui/SVGs/NarrowStartFromArrow"

const setTitle = gradientStyle => {
  if (gradientStyle === RADIAL) return "Position"
  if (gradientStyle === CONIC) return "Start Angle"

  return "Direction"
}

const GradientDirectionControl = () => {
  const { gradientOptions } = useContext(StoreContext)
  const dispatch = useContext(StoreDispatchContext)

  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <p className="text-bold margin-block-end-50">
        {setTitle(gradientOptions.style)}
      </p>
      <ButtonGrid>
        {gradientOptions.style === LINEAR
          ? LINEAR_DIRECTIONS.map(direction => {
              if (direction === EMPTY) return <div key={direction}></div>

              return (
                <ControlButton
                  key={direction}
                  selected={
                    gradientOptions.linearParams.direction === direction
                  }
                  onClick={dispatchAction(SET_LINEAR_DIRECTION, {
                    direction
                  })}
                >
                  <span className="visually-hidden">{direction}</span>
                  <NarrowArrowSVG direction={direction} />
                </ControlButton>
              )
            })
          : gradientOptions.style === RADIAL
            ? RADIAL_POSITIONS.map(position => {
                if (position === CENTER)
                  return (
                    <ControlButton
                      key={position}
                      selected={
                        gradientOptions.radialParams.position === position
                      }
                      onClick={dispatchAction(SET_RADIAL_POSITION, {
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
                    selected={
                      gradientOptions.radialParams.position === position
                    }
                    onClick={dispatchAction(SET_RADIAL_POSITION, {
                      position
                    })}
                  >
                    <span className="visually-hidden">{position}</span>
                    <NarrowDirectionCircle radialOrigin={position} />
                  </ControlButton>
                )
              })
            : gradientOptions.style === CONIC &&
              CONIC_START_ANGLES.map(startAngle => {
                if (startAngle === EMPTY) return <div key={startAngle}></div>

                return (
                  <ControlButton
                    key={startAngle}
                    selected={
                      gradientOptions.conicParams.startAngle === startAngle
                    }
                    onClick={dispatchAction(SET_CONIC_START_ANGLE, {
                      startAngle
                    })}
                  >
                    <span className="visually-hidden">{startAngle}</span>
                    <NarrowStartFromArrow inclination={startAngle} />
                  </ControlButton>
                )
              })}
      </ButtonGrid>
    </section>
  )
}

export default GradientDirectionControl
