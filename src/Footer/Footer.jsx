import style from './Footer.module.css'
import Heading from '../Components/Heading'
import img1 from '../Assets/Images/x-logo.png'
import img2 from '../Assets/Images/in-logo.png'
import img3 from '../Assets/Images/ins-logo.png'

function Footer() {
  return (
    <>
    <div className={style.main}>
      <div className={style.left}>
        <p>LOGO</p>
        <div className={style.logos}>
          <p><img src={img1} alt="" /></p>
          <p><img src={img2} alt="" /></p>
          <p><img src={img3} alt="" /></p>

        </div>
      </div>

      <div className={style.right}>
        <div className={style.top}>
          <Heading text="PAGES"/>
          <div className={style.points}>
            <p>Home</p>
            <p>About Us</p>
            <p>Resources</p>
          </div>

        </div>

        <div className={style.bottom}>
          <Heading text="ADDRESS"/>
          <div className={style.address}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.<br/> 12345</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.<br/> 12345</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.<br/> 12345</p>
          </div>


        </div>


      </div>

    </div>
    </>
  )
}

export default Footer