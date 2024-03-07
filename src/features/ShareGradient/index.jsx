import ShareSVG from "../../shared/ui/SVGs/Share"
import styles from "./ui/index.module.css"
import CodeContainer from "../../shared/ui/CodeContainer"
import Modal from "../../shared/ui/Modal"
import { useRef } from "react"

const ShareGradient = () => {
  const modalOpenerRef = useRef(null)

  return (
    <>
      <button
        ref={modalOpenerRef}
        className={`${styles["share-button"]} | toggler-button`}
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
          <CodeContainer></CodeContainer>
        </section>
      </Modal>
    </>
  )
}

export default ShareGradient
