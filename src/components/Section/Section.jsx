import React from 'react'
import Card from '../Card/Card'
import './Section.css'

const Section = ({secTitle,cards}) => {
  return (

    <div className='totalSec'>
      <h1 className='secTitle'>{secTitle}</h1>
      <div className='secCounter'>
        {cards.map((card,ind)=>{
            return(
                <Card key={ind} image={card.image} detail={card.detail} title={card.title} intro={card.intro}/>
               
            )})}
      </div>
    </div>
  )
}

export default Section

