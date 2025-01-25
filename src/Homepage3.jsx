import Heading from "./Components/Heading"
import Cards from "./Components/Cards"
import style from './css_file/homepage3.module.css'

function Homepage3() {
  return (
    <>
    <div className={style.heading}>
        <Heading text="SERVICES"/>
    </div>

    <div className={style.body}>
      <div className={style["blank-space"]}></div>

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

export default Homepage3