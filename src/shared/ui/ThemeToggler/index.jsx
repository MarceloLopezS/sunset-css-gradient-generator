import SunSVG from "../SVGs/Sun"

const ThemeToggler = () => {
  return (
    <button className="theme-toggler | toggler-button">
      <span className="visually-hidden">Toggle Theme</span>
      <SunSVG />
    </button>
  )
}

export default ThemeToggler
