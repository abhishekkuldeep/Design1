import Heading from "../../../Components/Heading"
import style from './Partners.module.css'
import img1 from '../../../Assets/Images/brand1.png'
import img2 from '../../../Assets/Images/brand2.png'
import img3 from '../../../Assets/Images/brand3.png'

function Partners() {
  return (
    <>
      <div className={style.main}>
        <h2>
          <Heading text="OUR PARTNERS"/>
        </h2>
        <div className={style.list}>

          <div className={style.brands}>
            <p><img src={img1} alt="" /></p>
            <h6>BRAND NAME</h6>
          </div>
                
          <div className={style.brands}>
            <p><img src={img2} alt="" /></p>
            <h6>BRAND NAME</h6>
          </div>
                
          <div className={style.brands}>
            <p><img src={img3} alt="" /></p>
            <h6>BRAND NAME</h6>
          </div>
                

        </div>

      </div>

    </>
  )
}

export default Partners