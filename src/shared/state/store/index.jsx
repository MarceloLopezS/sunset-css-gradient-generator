import { create } from "zustand"
import rootReducer from "../reducers/root"
import initialState from "../config/initialState"

export const useStoreData = create(() => initialState)
export const dispatch = action =>
  useStoreData.setState(state => rootReducer(state, action))
