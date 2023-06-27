export const SlideButton = ({ data, handleClick }) => {
  const keys = Object.keys(data)
  const handleClickButton = (keyName) => {
    handleClick(keyName)
  }
  return (
    <div className='slideButton_container'>
      {
          keys.map((keyName) => {
            return (
              <button onClick={() => handleClickButton(keyName)} key={keyName}>{keyName}</button>
            )
          })
      }
    </div>
  )
}
