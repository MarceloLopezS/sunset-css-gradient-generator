import { useRef } from "react"
import { useContext } from "react"
import { StoreDispatchContext } from "../../shared/state/store"
import { SET_GRADIENT_COLOR } from "../../shared/state/config/actions"
import { CONIC } from "../../shared/utils/constants"
import styles from "./ui/styles.module.css"

const validateStopInput = value => {
  const parsedVal = parseInt(value)
  if (Number.isNaN(parsedVal)) return null

  return parsedVal
}

const InputColor = ({ colorId, colorValue, colorStop, colorStyle }) => {
  const colorRef = useRef(null)
  const stopRef = useRef(null)
  const dispatch = useContext(StoreDispatchContext)
  const dispatchAction = (type, colorId) => () =>
    dispatch({
      type,
      payload: {
        id: colorId,
        value: colorRef.current.value,
        stop: validateStopInput(stopRef.current.value)
      }
    })

  return (
    <div className={styles["color-group"]}>
      <label className={styles.label}>
        <span className="visually-hidden">Input color</span>
        <input
          ref={colorRef}
          type="color"
          className={styles.input}
          value={colorValue}
          onChange={dispatchAction(SET_GRADIENT_COLOR, colorId)}
        />
      </label>
      <span className="text-center">solid</span>
      <div className={styles["percentage-container"]}>
        <label className={styles.label}>
          <span className="visually-hidden">Color percentage</span>
          <input
            ref={stopRef}
            type="text"
            className={styles.input}
            minLength="1"
            maxLength="3"
            value={colorStop || ""}
            placeholder="-"
            onChange={dispatchAction(SET_GRADIENT_COLOR, colorId)}
          />
        </label>
        <span>{colorStyle === CONIC ? "°" : "%"}</span>
      </div>
    </div>
  )
}

export default InputColor
