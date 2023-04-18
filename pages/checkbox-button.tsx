import { useState } from 'react'

export default function CheckboxButton() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <button
        disabled={isChecked}
        style={
          isChecked
            ? { backgroundColor: 'black', color: 'gray', border: 0 }
            : {}
        }
      >
        Button
      </button>
    </>
  )
}
