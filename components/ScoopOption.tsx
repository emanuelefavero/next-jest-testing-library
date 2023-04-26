import Col from 'react-bootstrap/Col'
import { apiURL } from '@/config'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useOrderDetails } from '@/contexts/OrderDetails'

interface Props {
  name: string
  imagePath: string
}

export default function ScoopOption({ name, imagePath }: Props) {
  // @ts-ignore
  const { updateItemCount } = useOrderDetails()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateItemCount(name, e.target.value, 'scoops')

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
      <img src={`${apiURL}/${imagePath}`} alt={`${name} scoop`} />

      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs='6' style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs='5' style={{ textAlign: 'left' }}>
          <Form.Control
            type='number'
            defaultValue={0}
            min={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  )
}
