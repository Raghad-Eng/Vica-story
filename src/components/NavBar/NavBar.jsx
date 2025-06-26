import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'




const NavBar = ({items,btn,Name}) => {
  
const navigate =useNavigate()
const go2signIn=()=>{navigate("signIn")}

  return (
    <nav>
      <div className='prenav'>
        <p>{Name}</p>
        <ul>
            {items.map((item,index)=>
            {return(
              <li key={index}><NavLink to={item?.url} 
              className={({isActive})=>isActive?"active":""}>{item?.content}</NavLink></li>
            )})}
        </ul>
      </div>
      <button onClick={go2signIn}>{btn}</button>
      {/* <button >{btn}</button> */}
    </nav>
  )
}

export default NavBar
