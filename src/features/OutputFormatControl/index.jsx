import { useStoreData, dispatch } from "@/shared/state/store"
import { SET_COLOR_FORMAT } from "@/shared/state/config/actions"
import { HEX, HSL, RGB } from "@/shared/utils/constants"
import ButtonGrid from "@/shared/ui/ButtonGrid"
import ControlButton from "@/shared/ui/ControlButton"

const availableFormats = [HEX, RGB, HSL]

const OutputFormatControl = () => {
  const colorFormat = useStoreData(state => state.colorFormat)
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <p className="text-bold margin-block-end-50">Output Format</p>
      <ButtonGrid>
        {availableFormats.map(format => (
          <ControlButton
            key={format}
            selected={colorFormat === format}
            onClick={dispatchAction(SET_COLOR_FORMAT, { colorFormat: format })}
          >
            {format}
          </ControlButton>
        ))}
      </ButtonGrid>
    </section>
  )
}

export default OutputFormatControl
