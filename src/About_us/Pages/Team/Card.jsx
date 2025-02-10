import style from './Card.module.css'
import img from '../../../Assets/Images/meet.jpeg'
import x from '../../../Assets/Images/x-logo.png'
import ins from '../../../Assets/Images/ins-logo.png'
import lin from '../../../Assets/Images/in-logo.png'

function Card() {
  return (
    <>
    <div className={style.main}>
      <div className={style.poster}>
        <img className={style.image} src={img} alt="" />

        <div className={style.links}>
          <a className={style.icons} href="https://www.x.com"><img src={x} alt="" /></a>
          <a className={style.icons} href="https://www.instagram.com"><img src={ins} alt="" /></a>
          <a className={style.icons} href="https://www.linkdin.com"><img src={lin} alt="" /></a>
        </div>

      </div>

      <div className={style.content}>
        <div className={style.heading}><p>POST</p></div>
        <h1>Name</h1>
        <h2>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
      </div>




        {/* <div className={style.image}>
        </div>

        <div className={style.texts}>
            <h1>POST</h1>
            <h2>Name</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis numquam impedit possimus, excepturi fugit totam voluptatibus consectetur sint ab.</h3>

        </div> */}

    </div>
    </>
    
  )
}

export default Card