import Link from 'next/link'

export default function SundaesOnDemand() {
  return (
    <>
      <h1>SundaesOnDemand</h1>
      <Link href='/sundaes-on-demand/summary-form'>
        sundaes-on-demand/summary-form
      </Link>
      <br />
      <Link href='/sundaes-on-demand/order-summary'>
        sundaes-on-demand/order-summary
      </Link>
    </>
  )
}
