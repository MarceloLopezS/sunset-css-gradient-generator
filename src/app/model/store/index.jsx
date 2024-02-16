import { createContext, useReducer } from "react"
import rootReducer from "../reducers/root"
import initialState from "../../config/initialState"

export const StoreContext = createContext(null)
export const StoreDispatchContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <StoreContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  )
}
