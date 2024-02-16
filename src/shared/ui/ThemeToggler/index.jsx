import { useContext } from "react"
import { StoreContext, StoreDispatchContext } from "../../state/store"
import { TOGGLE_THEME } from "../../state/config/actions"
import { DARK } from "../../utils/constants"
import SunSVG from "../SVGs/Sun"
import MoonSVG from "../SVGs/Moon"

const action = {
  type: TOGGLE_THEME
}

const ThemeToggler = () => {
  const { theme } = useContext(StoreContext)
  const dispatch = useContext(StoreDispatchContext)

  const dispatchAction = () => {
    dispatch(action)
  }

  return (
    <button className="theme-toggler | toggler-button" onClick={dispatchAction}>
      <span className="visually-hidden">Toggle Theme</span>
      {theme === DARK ? <SunSVG /> : <MoonSVG />}
    </button>
  )
}

export default ThemeToggler
