import { useModal } from "./model/hooks"
import ShareSVG from "../../shared/ui/SVGs/Share"
import styles from "./ui/index.module.css"
import CodeContainer from "../../shared/ui/CodeContainer"

const ShareGradient = () => {
  const [modalOpenerRef, dialogRef] = useModal()

  return (
    <>
      <button
        ref={modalOpenerRef}
        className={`${styles["share-button"]} | toggler-button`}
      >
        <span className="visually-hidden">Share Gradient</span>
        <ShareSVG />
      </button>
      <dialog ref={dialogRef} className={styles["modal"]}>
        <p className={`${styles["modal__title"]} text-bold`}>
          Share your gradient
        </p>
        <section className={styles["modal__body"]}>
          <CodeContainer></CodeContainer>
        </section>
      </dialog>
    </>
  )
}

export default ShareGradient
