import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css'
import Board from './components/Board'

import { Box, Typography } from '@mui/material'

function App() {
  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='15px'
        p='15px'
      >
        <img
          src='/Deutsche_Bahn_AG-Logo.svg.png'
          alt='DB Logo'
          style={{ height: '45px' }}
        />
        <Typography variant='h2' align='center'>
          Case Study Chess
        </Typography>
      </Box>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/chessboard.html'>
              <Route path='' element={<Board />} />
            </Route>
            <Route path='/*' element={<Navigate to='/chessboard.html' />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
