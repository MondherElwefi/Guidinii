import React from "react";
import "./Statistical.css";
import StatisticalCard from "./StatisticalCard";
function Statistical() {
  return (
    <>
    <h1 className='cards-page-title'>Our Statistical</h1>
    <div className="Statistical-wrapper">
      <div>
      <StatisticalCard
        number="+1000"
        text="Teachers who accompany students  every day."
      />
      <StatisticalCard
        number="+200"
        text="Students are trained in the trendiest technology on the market."
      />
      </div>
      <div>
      <StatisticalCard
        number="+100"
        text="A recruiting partner who trusts our teaching method."
      />
      <StatisticalCard
        number="+25"
        text="A training session with industry experts has begun."
      />
      </div>
      
    </div>
    </>
    
  );
}

export default Statistical;
