import { useRef } from "react"
import ShareSVG from "@/shared/ui/SVGs/Share"
import Modal from "@/shared/ui/Modal"
import LinkShare from "./ui/LinkShare"
import styles from "./ui/styles.module.css"

const ShareGradient = () => {
  const modalOpenerRef = useRef(null)

  return (
    <>
      <button
        ref={modalOpenerRef}
        className={`${styles["share-button"]} | toggler-button accent-icon`}
      >
        <span className="visually-hidden">Share Gradient</span>
        <ShareSVG />
      </button>
      <Modal modalOpenerRef={modalOpenerRef} className={styles["modal"]}>
        <p className={`${styles["modal__title"]} text-bold`}>
          Share your gradient
        </p>
        <section className={styles["modal__body"]}>
          <p className="text-bold margin-block-end-50">Share link:</p>
          <LinkShare />
        </section>
      </Modal>
    </>
  )
}

export default ShareGradient
