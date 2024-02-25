import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Header,
  Plans,
  Benefits,
  Series,
  Experts,
  Reviews,
  FAQ,
  ContactUs,
} from './components'
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
      <Header title={appData.tab_banner_data?.title} />
      {appData.plans && <Plans plans={appData.plans} />}
      {appData.benefits && <Benefits benefits={appData.benefits} />}
      {appData.series_item && <Series series={appData.series_item} />}
      {appData.creator_item && <Experts experts={appData.creator_item} />}
      {appData.user_item && <Reviews reviews={appData.user_item} />}
      {appData.faq && <FAQ qas={appData.faq} />}
      <ContactUs />
    </div>
  )
}

export default App
