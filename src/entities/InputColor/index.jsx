import { useRef, forwardRef } from "react"
import { useStoreData, dispatch } from "../../shared/state/store"
import {
  DELETE_COLOR,
  SET_GRADIENT_COLOR
} from "../../shared/state/config/actions"
import { CONIC } from "../../shared/utils/constants"
import TrashSVG from "../../shared/ui/SVGs/Trash"
import styles from "./ui/styles.module.css"

const validateStopInput = value => {
  const parsedVal = parseInt(value)
  if (Number.isNaN(parsedVal)) return null

  return parsedVal
}

const InputColor = forwardRef(({ id, value, stop, isDeleteable }, ref) => {
  const style = useStoreData(state => state.gradientOptions.style)
  const colorRef = useRef(null)
  const stopRef = useRef(null)
  const dispatchAction = (type, id) => () =>
    dispatch({
      type,
      payload: {
        id: id,
        value: colorRef.current.value,
        stop: validateStopInput(stopRef.current.value)
      }
    })

  return (
    <div className={styles["color-group"]} ref={ref}>
      <label className={styles.label}>
        <span className="visually-hidden">{`Input color ${id}`}</span>
        <input
          ref={colorRef}
          type="color"
          className={styles.input}
          value={value}
          onChange={dispatchAction(SET_GRADIENT_COLOR, id)}
        />
        {isDeleteable && (
          <button
            className={styles["color--delete"]}
            onClick={dispatchAction(DELETE_COLOR, id)}
          >
            <span className="visually-hidden">{`Delete color ${id}`}</span>
            <TrashSVG />
          </button>
        )}
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
            value={stop ?? ""}
            placeholder="-"
            onChange={dispatchAction(SET_GRADIENT_COLOR, id)}
          />
        </label>
        <span>{style === CONIC ? "°" : "%"}</span>
      </div>
    </div>
  )
})

export default InputColor
