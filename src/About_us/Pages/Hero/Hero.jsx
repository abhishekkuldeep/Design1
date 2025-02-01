import style from './Hero.module.css'
import img1 from '../../../Assets/Images/semicircle-logo.png'
import img2 from '../../../Assets/Images/meet.png'

function Hero() {
  return (
    <>
    <div className={style.main}>
        <div className={style.body}>
            <div className={style.left}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <span> Omnis sit, quisquam </span> culpa hic molestias sequi?</p>

            </div>
            <div className={style.right}>
              <img src={img1} alt="" />

            </div>

        </div>
        

    </div>
    <img src={img2} alt="" />
    </>
  )
}

export default Hero