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

  useEffect(() => {
    axios
      .get(`${apiURL}/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true))
  }, [optionType])

  if (error) return <AlertBanner />

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>
        {items.map((item: Item) => (
          <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
          />
        ))}
      </Row>
    </>
  )
}
