import React from 'react'
import Card from './Card'
import "./CardsPage.css"
function CardsPage() {
  const dataCard={
    

  }
  return (
    <div className='cards-page'>
      <h1 className='cards-page-title'>Why Guidinii</h1>
      <div className='cards-wrapper'>
        <Card img="/src/assets/imgs/easy-img.png" title="Easy To use " text="This platform is very easy to use ."/>
        <Card img="/src/assets/imgs/newSkills-img.png" title="New Skills" text="Build your skills with video lessons on over 200 topics ."/>
        <Card img="/src/assets/imgs/bestPlatform-img.png" title="Best Platform " text="Leading companies use the same courses to keep their employees up to date with their skills ."/>
      </div>
    </div>
  )
}

export default CardsPage