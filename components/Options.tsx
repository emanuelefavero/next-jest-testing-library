import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '@/config'
import Row from 'react-bootstrap/Row'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'

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

  useEffect(() => {
    axios
      .get(`${apiURL}/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error))
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption

  return (
    <Row>
      {items.map((item: Item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      ))}
    </Row>
  )
}
