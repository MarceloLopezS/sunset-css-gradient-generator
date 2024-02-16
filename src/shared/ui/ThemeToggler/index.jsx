import { useContext } from "react"
import { StoreContext, StoreDispatchContext } from "../../../app/model/store"
import { TOGGLE_THEME } from "../../../app/config/actions"
import SunSVG from "../SVGs/Sun"
import MoonSVG from "../SVGs/Moon"

const DARK = "dark"
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
