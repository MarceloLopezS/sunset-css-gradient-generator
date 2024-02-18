import { useContext } from "react"
import { StoreContext } from "../../shared/state/store"
import ControlPanel from "../../widgets/ControlPanel"
import GradientDisplay from "../../entities/GradientDisplay"
import styles from "./ui/styles.module.css"

const Home = () => {
  const { theme, panelDisplay } = useContext(StoreContext)

  return (
    <main
      className={`${styles["main-content"]} | container`}
      data-theme={theme}
      data-control-panel-display={panelDisplay}
    >
      <ControlPanel />
      <GradientDisplay />
    </main>
  )
}

export default Home
