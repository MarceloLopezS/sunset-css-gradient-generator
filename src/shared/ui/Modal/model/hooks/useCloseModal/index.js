import { useRef, useEffect, useCallback } from "react"

const useCloseModal = () => {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  const handleCloseAnimation = useCallback(() => {
    const dialog = dialogRef.current

    dialog.removeAttribute('hide')
    dialog.close()
    dialog.removeEventListener('animationend', handleCloseAnimation)
  }, [dialogRef])

  const closeModal = useCallback(() => {
    const dialog = dialogRef.current

    dialog.setAttribute("hide", "")
    dialog.addEventListener("animationend", handleCloseAnimation)
  }, [dialogRef])

  const closeModalOnEscKey = useCallback((e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal()
    }
  }, [dialogRef])

  useEffect(() => {
    if (
      dialogRef.current == null
      || closeButtonRef.current == null
    ) throw new Error(
      "Dialog and close button references are required."
    )

    const dialog = dialogRef.current
    const closeButton = closeButtonRef.current

    closeButton.addEventListener("click", closeModal)
    dialog.addEventListener("keydown", closeModalOnEscKey)

    return () => {
      closeButton.removeEventListener("click", closeModal)
      dialog.removeEventListener("keydown", closeModalOnEscKey)
    }
  }, [dialogRef])

  return [dialogRef, closeButtonRef]
}

export default useCloseModal