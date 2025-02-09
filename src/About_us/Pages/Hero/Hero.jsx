import style from './Hero.module.css'
import img1 from '../../../Assets/Images/semicircle-logo.png'

function Hero() {
  return (
    <>
    <div className={style.main}>
      <div className={style.content}>

        <div className={style.text}>
          <p>Lorem Ipsum is simply dummy text of the <span>printing and typesetting</span> industry</p>
        </div>

        <div className={style.dotLogo}>
          <img src={img1} alt="" />
        </div>
      </div>

        

    </div>
    </>
  )
}

export default Hero