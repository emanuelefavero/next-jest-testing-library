import Link from 'next/link'
import Button from 'react-bootstrap/Button'

export default function SundaesOnDemand() {
  return (
    <>
      <h1>SundaesOnDemand</h1>
      <Link href='/sundaes-on-demand/test-page'>
        sundaes-on-demand/test-page
      </Link>
      <Button variant='primary'>Primary</Button>
    </>
  )
}
