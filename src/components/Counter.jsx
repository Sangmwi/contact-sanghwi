import React from 'react'
import { useCounterStore } from '../stores/useCounterStore'
import { Button, Typography, Box } from '@mui/material'

const Counter = () => {
  const { count, increase, decrease } = useCounterStore()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Typography variant="h1">{count}</Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button variant="outlined" onClick={() => increase(1)}>Increase!</Button>
        <Button variant="outlined" onClick={() => decrease(1)}>Decrease!</Button>
      </Box>
    </Box>
  )
}

export default Counter
