import { useContext } from "react"
import { LINEAR, RADIAL, CONIC } from "../../shared/utils/constants"
import { StoreContext, StoreDispatchContext } from "../../shared/state/store"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ButtonsLinearGradient from "./ui/ButtonsLinearGradient"
import ButtonsRadialGradient from "./ui/ButtonsRadialGradient"
import ButtonsConicGradient from "./ui/ButtonsConicGradient"

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
        {gradientOptions.style === LINEAR ? (
          <ButtonsLinearGradient
            currentDirection={gradientOptions[LINEAR].direction}
            dispatcher={dispatchAction}
          />
        ) : gradientOptions.style === RADIAL ? (
          <ButtonsRadialGradient
            currentPosition={gradientOptions[RADIAL].position}
            dispatcher={dispatchAction}
          />
        ) : (
          gradientOptions.style === CONIC && (
            <ButtonsConicGradient
              currentStartAngle={gradientOptions[CONIC].startAngle}
              dispatcher={dispatchAction}
            />
          )
        )}
      </ButtonGrid>
    </section>
  )
}

export default GradientDirectionControl
