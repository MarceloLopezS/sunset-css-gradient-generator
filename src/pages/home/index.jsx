import { useContext } from "react"
import { StoreContext } from "../../shared/state/store"
import ControlPanel from "../../widgets/ControlPanel"
import GradientDisplay from "../../entities/GradientDisplay"

const Home = () => {
  const { theme } = useContext(StoreContext)

  return (
    <main
      className="main-content | container transition-bg-500-ease"
      data-theme={theme}
    >
      <ControlPanel />
      <GradientDisplay />
    </main>
  )
}

export default Home
