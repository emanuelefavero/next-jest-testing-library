import Options from '@/components/Options'
import OrderSummary from '@/components/OrderSummary'

export default function OrderEntry() {
  return (
    <>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <OrderSummary />
    </>
  )
}
