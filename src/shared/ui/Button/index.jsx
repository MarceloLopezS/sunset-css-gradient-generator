import styles from "./ui/styles.module.css"

const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>
}

export default Button
