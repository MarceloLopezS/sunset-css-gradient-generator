import styles from "./ui/styles.module.css"

const ButtonGrid = ({ children }) => {
  return <section className={styles["button-grid"]}>{children}</section>
}

export default ButtonGrid
