import Link from 'next/link'
import Options from '@/components/Options'

export default function SundaesOnDemand() {
  return (
    <>
      <h1>SundaesOnDemand</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />

      <Link href='/sundaes-on-demand/order-summary'>
        sundaes-on-demand/order-summary
      </Link>
      <br />
    </>
  )
}
