import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Header,
  Plans,
  Series,
  Experts,
  Reviews,
  FAQ,
  ContactUs,
} from './components'
import warning from './assets/warning.png'
import './App.css'

const App = () => {
  const [appData, setAppData] = useState({})
  const [status, setStatus] = useState('fetching')
  useEffect(() => {
    setStatus('fetching')
    axios
      .get(
        'https://api.seekhoapp.com/api/v1.6/premium/premium-plans/?source=tab',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setAppData(res.data)
        setStatus('success')
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }, [])
  if (status === 'success')
    return (
      <div className="app">
        <Header title={appData.tab_banner_data?.title} />
        {appData.plans && (
          <Plans plans={appData.plans} benefits={appData.benefits} />
        )}
        {appData.series_item && <Series series={appData.series_item} />}
        {appData.creator_item && <Experts experts={appData.creator_item} />}
        {appData.user_item && <Reviews reviews={appData.user_item} />}
        {appData.faq && <FAQ qas={appData.faq} />}
        <ContactUs />
      </div>
    )
  else if (status === 'fetching')
    return (
      <div className="fetch">
        <div className="loading"></div>
      </div>
    )
  else
    return (
      <div className="error-container">
        <img src={warning} alt="Error Icon" className="error-icon" />
        <p className="error-message">Something went wrong! Please try again.</p>
      </div>
    )
}

export default App
