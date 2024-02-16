import "./ui/global.css"
import { StoreProvider } from "./model/store"
import Home from "../pages/home"

const App = () => {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  )
}

export default App
