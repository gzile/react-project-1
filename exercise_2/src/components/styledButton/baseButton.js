
export const BaseButton = ({onClick, text, style}) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}
