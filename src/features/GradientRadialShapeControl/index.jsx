import { useStoreData, dispatch } from "../../shared/state/store"
import { ELLIPSE, CIRCLE, RADIAL } from "../../shared/utils/constants"
import { SET_RADIAL_SHAPE } from "../../shared/state/config/actions"
import { capitalizeString } from "../../shared/utils/functions"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const availableShapes = [ELLIPSE, CIRCLE]

const GradientRadialShapeControl = () => {
  const shape = useStoreData(state => state.gradientOptions[RADIAL].shape)
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <p className="text-bold margin-block-end-50">Shape</p>
      <ButtonGrid>
        {availableShapes.map(availableShape => {
          return (
            <ControlButton
              key={availableShape}
              selected={shape === availableShape}
              onClick={dispatchAction(SET_RADIAL_SHAPE, {
                shape: availableShape
              })}
            >
              {capitalizeString(availableShape)}
            </ControlButton>
          )
        })}
      </ButtonGrid>
    </section>
  )
}

export default GradientRadialShapeControl
