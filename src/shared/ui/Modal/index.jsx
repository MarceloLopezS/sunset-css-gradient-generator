import { useEffect, useCallback } from "react"
import useCloseModal from "./model/hooks/useCloseModal"
import CloseXSVG from "../SVGs/CloseX"
import styles from "./ui/styles.module.css"

const Modal = ({ modalOpenerRef, className, children }) => {
  const [dialogRef, closeButtonRef] = useCloseModal()

  const showModal = useCallback(() => {
    const dialog = dialogRef.current

    if (!dialog) throw new Error("No dialog element reference provided.")

    dialog.showModal()
    return
  }, [dialogRef])

  useEffect(() => {
    const modalOpener = modalOpenerRef.current

    modalOpener.addEventListener("click", showModal)

    return () => {
      modalOpener.removeEventListener("click", showModal)
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className={`${styles["modal"]}${
        className == null ? "" : " " + className
      }`}
    >
      <button type="button" ref={closeButtonRef}>
        <span className="visually-hidden">close</span>
        <CloseXSVG />
      </button>
      {children}
    </dialog>
  )
}

export default Modal
