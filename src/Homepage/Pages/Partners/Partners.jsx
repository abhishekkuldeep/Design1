import Heading from "../../../Components/Heading"
import style from './Partners.module.css'

function Partners() {
  return (
    <>
      <div className={style.main}>
        <h2>
          <Heading text="OUR PARTNERS"/>
        </h2>
        <div className={style.list}>

          <div className={style.brands}>
            <p className={style.img1}></p>
            <h6>BRAND NAME</h6>
          </div>
                
          <div className={style.brands}>
            <p className={style.img2}></p>
            <h6>BRAND NAME</h6>
          </div>
                
          <div className={style.brands}>
            <p className={style.img3}></p>
            <h6>BRAND NAME</h6>
          </div>
                

        </div>

      </div>

    </>
  )
}

export default Partners