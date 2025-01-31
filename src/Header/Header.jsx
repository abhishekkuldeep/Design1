import style from './Header.module.css'
import Button from '../Components/Button'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
     <div className={style.navBar}>  
            <div className={style.sectionA}>
              <p>
                <NavLink to="/home">Home</NavLink>
              </p>
              <p>
                <NavLink to="/service">Service Page</NavLink>
              </p>


              
            </div>
            <div className={style.sectionB}>
                <p>ABOUT</p>
                <p>RESOURCES</p>
                <p><Button message="About Us"/></p>
            </div>
        </div>

    </>
  )
}

export default Header