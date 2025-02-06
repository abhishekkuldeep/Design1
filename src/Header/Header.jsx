import style from './Header.module.css'
import Button from '../Components/Button'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
     <div className={style.navBar}>
      <div className={style.left}>
        <p className={style.home}> <NavLink to="/">HOME</NavLink> </p>
      </div>
      <div className={style.right}>
        <p className={style.about}> <NavLink to="/aboutUs">ABOUT</NavLink> </p>
        <p className={style.resources}> <NavLink to="/service">SERVICE</NavLink> </p>
        <p className={style.btn}><Button message="JOIN US" /></p>

      </div>
        </div>

    </>
  )
}

export default Header