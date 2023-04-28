// @ts-nocheck

import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '@/config'
import Row from 'react-bootstrap/Row'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'
import AlertBanner from './AlertBanner'
import { pricePerItem } from '@/constants'
import formatCurrency from '@/utils/formatCurrency'
import { useOrderDetails } from '@/contexts/OrderDetails'

interface Item {
  name: string
  imagePath: string
}

interface Props {
  optionType: string
}

// optionType is either 'scoops' or 'toppings'
export default function Options({ optionType }: Props) {
  const [items, setItems] = useState<Item[]>([])
  const [error, setError] = useState(false)
  const { totals } = useOrderDetails()

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    // * create an abort controller to cancel the request if it takes too long
    // ? AbortController is a Javascript API that allows you to abort one or more DOM requests as and when desired
    // ? @see https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    // ? (it is also needed here to prevent act()... errors during testing)
    const controller = new AbortController()

    axios
      .get(`${apiURL}/${optionType}`, {
        // * thanks to the signal property axios now watches for the abort signal and cancels the request when it is received
        signal: controller.signal,
      })
      .then((response) => setItems(response.data))
      .catch((error) => {
        if (error.name !== 'CanceledError') setError(true)
      })

    // * abort axios call on component unmount
    return () => controller.abort()
  }, [optionType])

  if (error) return <AlertBanner />

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>{optionItems}</Row>
    </>
  )
}
