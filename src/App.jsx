import { useState } from 'react'
import { Stack } from '@mantine/core'
import { Router } from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Stack>
      <Router />
    </Stack>
  )
}

export default App
