import Col from 'react-bootstrap/Col'
import { apiURL } from '@/config'

interface Props {
  name: string
  imagePath: string
}

export default function ToppingOption({ name, imagePath }: Props) {
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
    </Col>
  )
}
