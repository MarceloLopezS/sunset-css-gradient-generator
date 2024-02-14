import styles from "./ui/styles.module.css"
import GithubSVG from "../../../../shared/ui/SVGs/Github"
import AboutSVG from "../../../../shared/ui/SVGs/About"

const ControlPanelFooter = () => {
  return (
    <footer className={styles["contact-info"]}>
      <span>Developed by:</span>
      <a
        href="https://github.com/MarceloLopezS"
        target="_blank"
        rel="noreferrer"
      >
        <GithubSVG />
        MarceloLopezS
      </a>
      <a
        href="https://github.com/MarceloLopezS/CSS-gradient-generator"
        target="_blank"
        rel="noreferrer"
      >
        <AboutSVG />
        About this project
      </a>
    </footer>
  )
}

export default ControlPanelFooter
