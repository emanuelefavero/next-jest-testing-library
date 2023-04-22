import { useState } from 'react'

export default function SummaryForm() {
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(true)

  return (
    <>
      <input
        type='checkbox'
        id='i-agree-to-terms-and-conditions-checkbox'
        defaultChecked={checked}
        onChange={() => {
          setChecked(!checked)
          setDisabled(!disabled)
        }}
      />
      <label htmlFor='i-agree-to-terms-and-conditions-checkbox'>
        I agree to Terms and Conditions
      </label>
      <button
        disabled={disabled}
        style={disabled ? { opacity: 0.5, cursor: 'default' } : {}}
      >
        Confirm order
      </button>
    </>
  )
}
