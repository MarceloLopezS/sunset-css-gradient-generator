import styles from "./ui/styles.module.css"

const ControlButton = ({
  children,
  classList = [],
  selected,
  ...attributes
}) => {
  return (
    <button
      type="button"
      className={`${
        classList.length > 0
          ? classList.reduce(
              (acc, className) => `${acc} ${className}`,
              styles.btn
            )
          : styles.btn
      }`}
      data-selected={selected || null}
      {...attributes}
    >
      {children}
    </button>
  )
}

export default ControlButton
