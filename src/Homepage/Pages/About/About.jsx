import style from './About.module.css'
import Heading from '../../../Components/Heading'
import {NavLink} from 'react-router-dom'

function Hero() {
  return (
    <>
    <div className={style.ellipse}>
        <div className={style.shape}></div>
    </div>

    <div className={style.main}>

    <div className={style.heading}>
      <Heading text="ABOUT US"/>
    </div>
    <div className={style.midText}>
      <p>Lorem Ipsum is simply dummy text</p>
    </div>

    <div className={style.lastSec}>
      <p className= {style.textPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        
        <span className={style.subText}>
           <br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
        </span>
      </p>
      <div className={style.about}>
        <NavLink to="/aboutUs" className={style.link}>ABOUT US</NavLink>

      </div>

    </div>

    </div>
    </>


  )
}

export default Hero