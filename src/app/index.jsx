import "./ui/global.css"
import ControlPanel from "../widgets/ControlPanel"
import GradientDisplay from "../entities/GradientDisplay"

function App() {
  return (
    <main className="main-content | container">
      <ControlPanel />
      <GradientDisplay />
    </main>
  )
}

export default App
