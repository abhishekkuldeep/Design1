import Button from "../../../Components/Button"
import style from './Hero.module.css'


function Hero() {
  return (
    <>
    <div className={style.main}>
      <div className={style.body}>
        <div className={style.textContent}>
          <p className={style.textboxA}>Text Box</p>
          <p className={style.textboxB}>text box</p>
          <div className={style.btn}> <Button message="JOIN US"/> </div>

        </div>
        <div className={style.boxArea}>
          <div className={style.box}></div>
          <div className={style.line}></div>
        </div>

      </div>
      <div className={style.textPara}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className={style.ellipse}></div>

    </div>
    </>
  )
}

export default Hero