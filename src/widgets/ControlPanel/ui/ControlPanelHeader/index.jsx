import ThemeToggler from "@/shared/ui/ThemeToggler"
import { BASE_URL } from "@/shared/utils/constants"
import ShareGradient from "@/features/ShareGradient"
import ControlPanelDisplayToggler from "../ControlPanelDisplayToggler"
import styles from "./ui/styles.module.css"

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
