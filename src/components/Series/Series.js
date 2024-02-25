import React from 'react'
import './Series.css'

const Series = ({ series }) => {
  return (
    <div className="series">
      <p>{series.title}</p>
      <div>
        {series.series_list.map((item) => (
          <img
            src={item.image}
            alt={item.display_title}
            key={item.id}
            className="series_item"
          />
        ))}
      </div>
    </div>
  )
}

export default Series
