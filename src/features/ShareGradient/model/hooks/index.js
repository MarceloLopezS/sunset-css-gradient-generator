import { useRef, useEffect, useCallback } from "react"

export const useModal = () => {
  const modalOpenerRef = useRef(null)
  const dialogRef = useRef(null)

  const showModal = useCallback(() => {
    const dialog = dialogRef.current

    if (!dialog) throw new Error("No dialog element reference provided.")

    dialog.showModal()
  }, [])

  useEffect(() => {
    const dialogTrigger = modalOpenerRef.current
    if (dialogTrigger) {
      dialogTrigger.addEventListener("click", showModal)

      return () => {
        dialogTrigger.removeEventListener("click", showModal)
      }
    }
  }, [modalOpenerRef, dialogRef])

  return [modalOpenerRef, dialogRef]
}
