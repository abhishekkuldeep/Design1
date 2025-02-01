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
            </div>
            
            <div className={style.sectionB}>
                <p>
                  <NavLink to="/aboutUs">ABOUT</NavLink>
                </p>
                <p>
                <NavLink to="/service">SERVICES</NavLink>
                </p>
                <p><Button message="JOIN US"/></p>
            </div>
        </div>

    </>
  )
}

export default Header