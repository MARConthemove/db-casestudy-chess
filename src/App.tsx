import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css'
import Board from './components/board'

import { Typography } from '@mui/material'

function App() {
  return (
    <>
      <Typography variant='h2' align='center' style={{ paddingBottom: '10px' }}>
        DB Case Study Chess
      </Typography>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Board />} />
            {/* <Route path='*' element={<Navigate to='/chessboard.html' />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
