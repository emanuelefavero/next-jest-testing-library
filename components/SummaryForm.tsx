import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default function SummaryForm() {
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const checkboxLabel = (
    <>
      I agree to{' '}
      <OverlayTrigger
        placement='top'
        overlay={
          <Tooltip data-testid='terms-and-conditions-tooltip'>
            Those are our Terms and Conditions...
          </Tooltip>
        }
      >
        <span className='text-primary'>Terms and Conditions</span>
      </OverlayTrigger>
    </>
  )

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
          id='i-agree-to-terms-and-conditions'
        />
        <Form.Label htmlFor='i-agree-to-terms-and-conditions'>
          {checkboxLabel}
        </Form.Label>

        <Button variant='primary' disabled={disabled} type='submit'>
          Confirm order
        </Button>
      </Form>
    </>
  )
}
