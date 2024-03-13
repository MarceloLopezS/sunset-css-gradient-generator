import ThemeToggler from "../../../../shared/ui/ThemeToggler"
import ControlPanelDisplayToggler from "../ControlPanelDisplayToggler"
import ShareGradient from "../../../../features/ShareGradient"
import styles from "./ui/styles.module.css"
import { BASE_URL } from "../../../../shared/utils/constants"

const ControlPanelHeader = () => {
  return (
    <header className={`${styles["cp__header"]}`}>
      <section className={`${styles["cp__togglers-wrapper"]}`}>
        <div className={`${styles["cp__left-buttons-wrapper"]}`}>
          <ThemeToggler />
          <ShareGradient />
        </div>
        <ControlPanelDisplayToggler />
      </section>
      <h1 className={`${styles["cp__title"]} | text-bold`}>
        <a href={BASE_URL}>Sunset - CSS Gradient Generator</a>
      </h1>
    </header>
  )
}

export default ControlPanelHeader
