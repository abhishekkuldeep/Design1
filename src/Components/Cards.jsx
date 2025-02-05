import style from '../Css_file/Cards.module.css'

function Cards() {
  return (
    <>
    <div className={style.main}>
      <p className={style.headText}>Intelligent Responses</p>
      <p className={style.text}>Using machine learning, AI, and NLP technology our talented teams develop dynamic solutions that </p>
      <div className={style.heading}>
        <p>Intelligent Responses</p>
      </div>

        <ul className={style.list}>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>






      
        {/* <h2>Intelligent Responses</h2>
        <p>Using Machine Learning, AI and NLP technology Our Talented Teams Develop Dynamic Solutions That</p>

        <div className={style.heading}>
          <Heading text="INTELLIGENT RESPONSES"/>
        </div>
        

        
        <ul className={style.listItem}>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
        </ul> */}
    </div>
    </>

  )
}

export default Cards