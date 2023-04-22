import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function SummaryForm() {
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(true)

  return (
    <>
      <Form>
        <Form.Check
          type='switch'
          defaultChecked={checked}
          onChange={() => {
            setChecked(!checked)
            setDisabled(!disabled)
          }}
          // TIP: The id attribute is used to associate a label with an input element, it is needed for tests to work (it replaces the htmlFor attribute)
          id='i-agree-to-terms-and-conditions-checkbox'
          label='I agree to Terms and Conditions'
        />

        <Button variant='primary' disabled={disabled} type='submit'>
          Confirm order
        </Button>
      </Form>
    </>
  )
}
