const NarrowCircleSVG = ({ classList = [], attributes = {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={
        classList.length > 0
          ? classList.reduce((acc, className) => `${acc} ${className}`)
          : null
      }
      width="16"
      height="16"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...attributes}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
}

export default NarrowCircleSVG
