import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { apiURL } from '@/config'
import { useOrderDetails } from '@/contexts/OrderDetails'

interface Props {
  name: string
  imagePath: string
}

export default function ToppingOption({ name, imagePath }: Props) {
  // @ts-ignore
  const { updateItemCount } = useOrderDetails()

  const handleChange = (e: any) => {
    updateItemCount(name, e.target.checked ? 1 : 0, 'toppings')
  }

  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{
        textAlign: 'center',
      }}
    >
      <img src={`${apiURL}/${imagePath}`} alt={`${name} topping`} />

      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check type='checkbox' onChange={handleChange} label={name} />
      </Form.Group>
    </Col>
  )
}
