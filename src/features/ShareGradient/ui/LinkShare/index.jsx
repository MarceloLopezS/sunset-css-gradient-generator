import { useStoreData } from "../../../../shared/state/store"
import {
  pipe,
  appendString,
  appendURLQueries
} from "../../../../shared/utils/functions"
import CodeContainer from "../../../../shared/ui/CodeContainer"

const LinkShare = () => {
  const gradientOptions = useStoreData(state => state.gradientOptions)
  const { style, colors } = gradientOptions
  const colorQueries = colors.reduce((acc, color, index) => {
    const { value, stop } = color

    if (index === 0)
      return `color=${value.slice(1)}${stop == null ? "" : "+" + stop}`

    return `${acc}&color=${value.slice(1)}${stop == null ? "" : "+" + stop}`
  }, "")

  const generateURL = pipe(
    appendString(location.href),
    appendString("?"),
    appendURLQueries({ style }),
    appendString("&"),
    appendURLQueries(gradientOptions[style]),
    appendString("&"),
    appendString(colorQueries)
  )

  return <CodeContainer>{encodeURI(generateURL())}</CodeContainer>
}

export default LinkShare
