import SummaryForm from '@/components/SummaryForm'
import { useOrderDetails } from '@/contexts/OrderDetails'
import formatCurrency from '@/utils/formatCurrency'

export default function OrderSummary() {
  // @ts-ignore
  const { totals, optionCounts } = useOrderDetails()

  const scoopArray = Object.entries(optionCounts.scoops)
  const scoopsList = scoopArray.map(
    ([key, value]) =>
      (value as number) > 0 && (
        <li key={key}>
          {value as number} {key}
        </li>
      )
  )

  const toppingsArray = Object.entries(optionCounts.toppings)
  const toppingsList = toppingsArray.map(
    ([key, value]) => (value as number) > 0 && <li key={key}>{key}</li>
  )

  return (
    <>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopsList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingsList}</ul>
      <SummaryForm />
    </>
  )
}
