import style from './about.module.css'
import Heading from '../../Components/Heading'

function Hero() {
  return (
    <>
    <div className={style.main}>
      

    <div className={style.circle}>
        <p></p>
    </div>

    <div className={style.body}>
        <div className={style.leftPart}>
          <div className={style.section1}>
              <Heading text="ABOUT US"/>
          </div>

          <div className={style.section2}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

        </div>
        <div className={style.rightPart}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam magni blanditiis nesciunt fugiat consequatur laudantium hic architecto facilis dolorem officia saepe nemo, impedit porro qui corporis quaerat soluta ducimus perferendis assumenda voluptate magnam incidunt fuga. Autem quisquam inventore quis.</h1>

        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores consectetur molestias nesciunt accusantium sapiente aut aperiam quasi libero laudantium corrupti reiciendis officia harum consequuntur molestiae sit, ab laborum, eos beatae dolore sed, dicta nobis sint! Totam tempora, excepturi, iure voluptates facere fuga distinctio a dicta sed temporibus voluptas aliquam?</h2>

        <p>About Us</p>

        </div>

    </div>
    </div>
    </>


  )
}

export default Hero