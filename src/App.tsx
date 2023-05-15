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
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

function App() {
  return (
    <>
      <Typography variant='h2' align='center' style={{ paddingBottom: '10px' }}>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <img
            src='/Deutsche_Bahn_AG-Logo.svg.png'
            alt='DB Logo'
            style={{ height: '45px', paddingRight: '15px' }}
          />
          Case Study Chess
        </Box>
      </Typography>
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
