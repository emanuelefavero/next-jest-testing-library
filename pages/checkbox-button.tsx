import { useState } from 'react'

export default function CheckboxButton() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        // defaultChecked is used to set the initial state of the checkbox
        defaultChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
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
