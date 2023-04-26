import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '@/config'
import Row from 'react-bootstrap/Row'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'
import AlertBanner from './AlertBanner'

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

  useEffect(() => {
    axios
      .get(`${apiURL}/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true))
  }, [optionType])

  if (error) return <AlertBanner />

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption

  return (
    <>
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
