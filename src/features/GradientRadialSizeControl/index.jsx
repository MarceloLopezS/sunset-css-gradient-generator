import { useStoreData, dispatch } from "../../shared/state/store"
import {
  CLOSEST_CORNER,
  CLOSEST_SIDE,
  FARTHEST_CORNER,
  FARTHEST_SIDE,
  RADIAL
} from "../../shared/utils/constants"
import {
  capitalizeString,
  toSpaceSeparated
} from "../../shared/utils/functions"
import { SET_RADIAL_SIZE } from "../../shared/state/config/actions"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const availableSizes = [
  CLOSEST_SIDE,
  FARTHEST_SIDE,
  CLOSEST_CORNER,
  FARTHEST_CORNER
]

const GradientRadialSizeControl = () => {
  const radialSize = useStoreData(state => state.radialSize)
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <p className="text-bold margin-block-end-50">Size</p>
      <ButtonGrid columns={2}>
        {availableSizes.map(size => {
          return (
            <ControlButton
              key={size}
              selected={radialSize === size}
              onClick={dispatchAction(SET_RADIAL_SIZE, { size })}
            >
              {capitalizeString(toSpaceSeparated(size, "-"))}
            </ControlButton>
          )
        })}
      </ButtonGrid>
    </section>
  )
}

export default GradientRadialSizeControl
