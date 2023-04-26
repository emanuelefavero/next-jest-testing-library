import Alert from 'react-bootstrap/Alert'

interface Props {
  message?: string
  variant?: string
}

export default function AlertBanner({ message, variant }: Props) {
  const alertMessage =
    message || 'An unexpected error occurred. Please try again later.'

  const alertVariant = variant || 'danger'

  return <Alert variant={alertVariant}>{alertMessage}</Alert>
}
