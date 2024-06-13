import GradientRadialShapeControl from "@/features/GradientRadialShapeControl"
import GradientRadialSizeControl from "@/features/GradientRadialSizeControl"
import { useStoreData } from "@/shared/state/store"
import { RADIAL } from "@/shared/utils/constants"

const ControlPanelRadialExtraProps = () => {
  const style = useStoreData(state => state.gradientOptions.style)

  return style === RADIAL ? (
    <>
      <GradientRadialShapeControl />
      <GradientRadialSizeControl />
    </>
  ) : null
}

export default ControlPanelRadialExtraProps
