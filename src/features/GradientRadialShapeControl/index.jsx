import { useContext } from "react"
import { ELLIPSE, CIRCLE, RADIAL } from "../../shared/utils/constants"
import { StoreContext, StoreDispatchContext } from "../../shared/state/store"
import { SET_RADIAL_SHAPE } from "../../shared/state/config/actions"
import { capitalizeString } from "../../shared/utils/functions"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const availableShapes = [ELLIPSE, CIRCLE]

const GradientRadialShapeControl = () => {
  const { gradientOptions } = useContext(StoreContext)
  const dispatch = useContext(StoreDispatchContext)

  const dispatchAction = (type, payload) => () => dispatch({ type, payload })
  return (
    <section>
      <p className="text-bold margin-block-end-50">Shape</p>
      <ButtonGrid>
        {availableShapes.map(shape => {
          return (
            <ControlButton
              key={shape}
              selected={gradientOptions[RADIAL].shape === shape}
              onClick={dispatchAction(SET_RADIAL_SHAPE, { shape })}
            >
              {capitalizeString(shape)}
            </ControlButton>
          )
        })}
      </ButtonGrid>
    </section>
  )
}

export default GradientRadialShapeControl
