import React from 'react'
import Card from '../Card/Card'
import Section from '../Section/Section'
import Hero from '../Hero/Hero'

const HomePage = () => {
  return (
    <div>
     
      <Hero title="Stories and interviews"
      par="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
      btn="Subscribe"/>
      <Section secTitle="All Blog Posts" 
      cards={
        [{
          image:"/assets/img1.png",
          detail:"Alec Whitten • 1 Jan 2023",
          title:"Bill Walsh leadership lessons",
          intro:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
        },
        {
          image:"/assets/img2.png",
          detail:"Demi WIlkinson • 1 Jan 2023",
          title:"PM mental models",
          intro:"Mental models are simple expressions of complex processes or relationships."
        },
        {

          image:"/assets/img3.png",
          detail:"Candice Wu • 1 Jan 2023",
          title:"What is Wireframing?",
          intro:"Introduction to Wireframing and its Principles. Learn from the best in the industry"
        },
        {
          image:"/assets/img4.png",
          detail:"Natali Craig • 1 Jan 2023",
          title:"How collaboration makes us better designers",
          intro:"Collaboration can make our teams stronger, and our individual designs better."
        },
        {
          image:"/assets/img5.png",
          detail:"Drew Cano • 1 Jan 2023",
          title:"Our top 10 Javascript frameworks to use",
          intro:"JavaScript frameworks make development easy with extensive features and functionalities."
        },
        {
          image:"/assets/img6.png",
          detail:"Orlando Diggs • 1 Jan 2023",
          title:"Podcast: Creating a better CX Community",
          intro:"Starting a community doesn’t need to be complicated, but how do you get started"
        },
      ]
      }/>
      
    </div>
  )
}

export default HomePage
