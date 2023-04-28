import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useOrderDetails } from '@/contexts/OrderDetails'
import toast, { Toaster } from 'react-hot-toast'

export default function SummaryForm() {
  // @ts-ignore
  const { totals } = useOrderDetails()
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const router = useRouter()

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (totals.scoops === 0) {
      toast.error('Please add at least one scoop')
      return
    }

    // send order to server or update context with order data
    // ...

    router.push('/sundaes-on-demand/order-confirmation')
  }

  const checkboxLabel = (
    <>
      I agree to{' '}
      <OverlayTrigger
        placement='top'
        overlay={
          <Tooltip data-testid='terms-and-conditions-tooltip'>
            No ice cream will actually be delivered
          </Tooltip>
        }
      >
        <span className='text-primary'>Terms and Conditions</span>
      </OverlayTrigger>
    </>
  )

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Check
          type='switch'
          defaultChecked={checked}
          onChange={() => {
            setChecked(!checked)
            setDisabled(!disabled)
          }}
          id='terms-and-conditions'
        />
        <Form.Label htmlFor='terms-and-conditions'>{checkboxLabel}</Form.Label>

        <Button variant='primary' disabled={disabled} type='submit'>
          Confirm order
        </Button>

        <h1>{totals.scoops}</h1>
      </Form>

      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}
