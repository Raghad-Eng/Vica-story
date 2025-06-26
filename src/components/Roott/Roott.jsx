import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'


const Roott = () => {

  return (
    <>
      <NavBar Name="YourName"
               items={[
                  {content:"home" ,url:"/"},
                  {content:"About",url:"/about"},
                 
                
                ]}
               btn="sign in"/>
               <hr/>
               <Outlet/>
               <hr/>
      <Footer text="© 2025 Blogs , vica web solutions"/>
    </>
  )
}

export default Roott
