import Button from "../../../Components/Button"
import style from './Hero.module.css'


function Hero() {
  return (
    <>
    <div className={style.main}>
        <div className={style.navBar}>  
            <div className={style.sectionA}>
                <p>HOME</p>
            </div>
            <div className={style.sectionB}>
                <p>ABOUT</p>
                <p>RESOURCES</p>
                <p><Button message="About Us"/></p>
            </div>
        </div>

        <div className={style.header}>
            <div className={style.subHeadA}>
                <h1>Text Box</h1>
                <h2>Text Box</h2>
                <Button message="About Us"/>
            </div>

            <div className={style.subHeadB}>
                <p></p>
            </div>

        </div>

        <div className={style.textPara}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem magni, eligendi sapiente voluptas maiores nostrum at? Corrupti, vitae neque! Ducimus nemo, voluptatem, esse obcaecati magni laborum reprehenderit aspernatur placeat odio in earum modi eaque alias ea quam voluptatum officiis error quidem quas inventore commodi nesciunt odit. Quos cumque, doloribus nisi autem sit sapiente maiores, voluptatem quod praesentium corporis illum iusto laboriosam quibusdam voluptate blanditiis, saepe qui nesciunt ad voluptatum!</p>
        </div>

        <div className={style.circle}>
          <p></p>
        </div>

    </div>
    </>
  )
}

export default Hero