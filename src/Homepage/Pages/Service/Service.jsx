import Heading from '../../../Components/Heading'
import Cards from '../../../Components/Cards'
import style from './Service.module.css'

function Service() {
  return (
    <>
    <div className={style.heading}>
        <Heading text="SERVICES"/>
    </div>

    <div className={style.body}>
      <div className={style.blank}></div>

      <div className={style.blocks}>
        <div className={style.cards}><Cards/></div>
        <div className={style.cards}><Cards/></div>
        <div className={style.cards}><Cards/></div>
        <div className={style.cards}><Cards/></div>
      </div>


    </div>
    
    
    </>

  )
}

export default Service