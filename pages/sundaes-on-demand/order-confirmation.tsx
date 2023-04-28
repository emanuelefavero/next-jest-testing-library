import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '@/config'
import Link from 'next/link'

export default function OrderConfirmation() {
  const [orderNumber, setOrderNumber] = useState<number | null>(null)

  useEffect(() => {
    axios
      .post(`${apiURL}/order`)
      .then((response) => setOrderNumber(response.data.orderNumber))
      .catch((error) => {
        console.error(error)
      })
  }, [])

  if (!orderNumber) {
    return <>Loading...</>
  }

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your order number is: {orderNumber}</p>

      <p>as per our terms and conditions, nothing will happen now</p>

      <Link href='/sundaes-on-demand'>Create new order</Link>
    </div>
  )
}
