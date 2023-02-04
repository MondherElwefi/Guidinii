import React from 'react'
import "./StatisticalCard.css"
function StatisticalCard({number,text}) {
  return (
    <div className="Statistical-card">
        <h3 className="Statistical-card-numbers" >{number}</h3>
        <p className="Statistical-card-text">{text}</p>
    </div>
  )
}

export default StatisticalCard