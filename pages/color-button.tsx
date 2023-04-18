import { useState } from 'react'

export default function ColorButtonPage() {
  const [color, setColor] = useState('red')
  const newColor = color === 'red' ? 'blue' : 'red'

  return (
    <>
      <button
        style={{
          backgroundColor: color,
        }}
        onClick={() => setColor(newColor)}
      >
        Change to {newColor}
      </button>
    </>
  )
}
