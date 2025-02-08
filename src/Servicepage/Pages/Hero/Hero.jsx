import style from './Hero.module.css'

function Hero() {
  return (
    <>
    <div className={style.main}>
        <div className={style.texts}>
            <p className={style.firstText}>Text Box</p>
            <p className={style.lastText}>Text Box</p>

        </div>

    </div>
    </>
  )
}

export default Hero