import styles from "./ui/styles.module.css"

const ButtonGrid = ({ children, columns = 3 }) => {
  return (
    <section
      className={styles["button-grid"]}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {children}
    </section>
  )
}

export default ButtonGrid
