import styles from "./ui/styles.module.css"

const ControlButton = ({ children, selected, className, ...attributes }) => {
  return (
    <button
      type="button"
      data-selected={selected || null}
      {...attributes}
      className={className != null ? `${styles.btn} ${className}` : styles.btn}
    >
      {children}
    </button>
  )
}

export default ControlButton
