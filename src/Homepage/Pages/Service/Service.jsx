import Heading from '../../../Components/Heading'
import Cards from '../../../Components/Cards'
import style from './Service.module.css'

function Service() {
  return (
    <>
    <div>
      <div className={style.heading}>
          <Heading text="SERVICES"/>
      </div>

      <div className={style.card1}><Cards/></div>
      <div className={style.card2}><Cards/></div>
      <div className={style.card3}><Cards/></div>
      <div className={style.card4}><Cards/></div>


    </div>

    
    
    </>

  )
}

export default Service