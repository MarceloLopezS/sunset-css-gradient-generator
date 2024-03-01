import { LINEAR, RADIAL, CONIC } from "../../shared/utils/constants"
import { capitalizeString } from "../../shared/utils/functions"
import { SET_GRADIENT_STYLE } from "../../shared/state/config/actions"
import { useStoreData, dispatch } from "../../shared/state/store"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const styleOptions = [LINEAR, RADIAL, CONIC]

const GradientStyleControl = () => {
  const style = useStoreData(state => state.gradientOptions.style)
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section className="control-panel__styles">
      <p className="text-bold margin-block-end-50">Style</p>
      <ButtonGrid>
        {styleOptions.map(styleOption => {
          return (
            <ControlButton
              key={styleOption}
              selected={style === styleOption}
              onClick={dispatchAction(SET_GRADIENT_STYLE, {
                style: styleOption
              })}
            >
              {capitalizeString(styleOption)}
            </ControlButton>
          )
        })}
      </ButtonGrid>
    </section>
  )
}

export default GradientStyleControl
