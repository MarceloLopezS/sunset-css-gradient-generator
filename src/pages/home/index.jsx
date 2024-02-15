import { useContext } from "react"
import { StoreContext } from "../../app/model/store"
import ControlPanel from "../../widgets/ControlPanel"
import GradientDisplay from "../../entities/GradientDisplay"

const Home = () => {
  const { theme } = useContext(StoreContext)

  return (
    <main className="main-content | container" data-theme={theme}>
      <ControlPanel />
      <GradientDisplay />
    </main>
  )
}

export default Home
