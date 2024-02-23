import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from './components'
import './App.css'

const App = () => {
  const [appData, setAppData] = useState({})
  useEffect(() => {
    axios
      .get(
        'https://api.seekhoapp.com/api/v1.6/premium/premium-plans/?source=tab',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
          },
        }
      )
      .then((res) => setAppData(res.data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <div className="app">
      <Header />
    </div>
  )
}

export default App
