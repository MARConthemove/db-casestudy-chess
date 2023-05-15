import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Board from './components/board'

import { Typography } from '@mui/material'

const App: React.FC = () => {
  return (
    <>
      <Typography variant='h2' align='center' style={{ paddingBottom: '10px' }}>
        DB Case Study Chess
      </Typography>
      <Routes>
        <Route path='/' />
      </Routes>
      <div className='App'>
        <Board />
      </div>
    </>
  )
}

export default App
