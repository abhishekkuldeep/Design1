import style from './Footer.module.css'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className={style.main}>
      <div className={style.left}>
        <div className={style.logo}>
          <p>LOGO</p>
        </div>
        <div className={style.icons}>
          <a href='https://www.x.com' target="_blank" rel="noopener"><div className={style.iconA}></div></a>
          <a href='https://www.instagram.com' target="_blank" rel="noopener"><div className={style.iconB}></div></a>
          <a href='https://www.linkdin.com' target="_blank" rel="noopener"><div className={style.iconC}></div></a>
        </div>

      </div>

      <div className={style.right}>
        <div className={style.upper}>
          <div className={style.heading}>
            <p>PAGES</p>
          </div>
          <div className={style.navigate}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/aboutUs'>About Us</NavLink>
            <NavLink to='/service'>Service</NavLink>            
          </div>

        </div>

        <div className={style.lower}>
          <div className={style.heading}>
            <p>ADDRESS</p>
          </div>

          <div className={style.address}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.<br/> 12345</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.<br/> 12345</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.<br/> 12345</p>

          </div>

        </div>

      </div>




      {/* <div className={style.left}>
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


      </div> */}

    </div>
    </>
  )
}

export default Footer