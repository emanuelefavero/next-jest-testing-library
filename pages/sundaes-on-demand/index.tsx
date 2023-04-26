import Container from 'react-bootstrap/Container'
import OrderEntry from '@/components/OrderEntry'
import OrderSummary from '@/components/OrderSummary'
import { OrderDetailsProvider } from '@/contexts/OrderDetails'

// TODO: Remember to start the api server (sundae-server, localhost:3030) before running this app locally

export default function SundaesOnDemand() {
  return (
    <>
      <h1>SundaesOnDemand</h1>
      <Container>
        <OrderDetailsProvider>
          <OrderEntry />
          <OrderSummary />
        </OrderDetailsProvider>
      </Container>
    </>
  )
}
