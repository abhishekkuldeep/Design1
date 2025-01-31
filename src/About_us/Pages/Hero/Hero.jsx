import Header from '../../../Header/Header'
import style from './Hero.module.css'

function Hero() {
  return (
    <>
    <div className={style.main}>
        <Header/>
        <div className={style.body}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, qui. Lo</p>

        </div>

    </div>
    </>
  )
}

export default Hero