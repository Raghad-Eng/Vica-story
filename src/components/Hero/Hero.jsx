import './Hero.css'

const Hero = ({title,par,btn}) => {
  return (
    <div className='secHero'>
      <h1>{title}</h1>
      <p>{par}</p>
      <form action="">
        <input type="text" name="" id="" value="Enter Your Email"/>
        <button>{btn}</button>
      </form>
    </div>
  )
}

export default Hero
{}