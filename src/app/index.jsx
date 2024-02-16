import "./ui/global.css"
import { StoreProvider } from "../shared/state/store"
import Home from "../pages/home"

const App = () => {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  )
}

export default App
