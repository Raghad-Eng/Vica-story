import React from 'react'

const Card = ({image,detail,title,intro}) => {
  return (
  
     <div className='oneCard'>
      <img src={image} alt="" />
      <p>{detail}</p>
      <div className='incard'><h1>{title}</h1>
      <img src="/assets/arrow-up-right.png" alt="" /></div>
      <p className='lastpar'>{intro}</p>
    </div>
  
  )
}

export default Card
