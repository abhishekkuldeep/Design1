import Heading from "./Heading"
import style from '../css_file/cards.module.css'

function Cards() {
  return (
    <>
    <div className={style.main}>
        <h2>Intelligent Responses</h2>
        <p>Using Machine Learning, AI and NLP technology Our Talented Teams Develop Dynamic Solutions That</p>

        <div className={style.heading}>
          <Heading text="INTELLIGENT RESPONSES"/>
        </div>
        

        
        <ul className={style.listItem}>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
        </ul>
    </div>
    </>

  )
}

export default Cards