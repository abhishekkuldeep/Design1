import style from './Header.module.css'
import Button from '../Components/Button'

function Header() {
  return (
    <>
     <div className={style.navBar}>  
            <div className={style.sectionA}>
                <p>HOME</p>
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