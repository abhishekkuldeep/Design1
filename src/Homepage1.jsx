import Button from "./Components/Button"
import style from './css_file/homepage1.module.css'


function Homepage1() {
  return (
    <>
    <div className={style.main}>
        <div className={style["nav-bar"]}>  
            <div className={style["nav-bar1"]}>
                <p>HOME</p>
            </div>
            <div className={style["nav-bar2"]}>
                <p>ABOUT</p>
                <p>RESOURCES</p>
                <p><Button message="About Us"/></p>
            </div>
        </div>

        <div className={style["header"]}>
            <div className={style.header1}>
                <h1>Text Box</h1>
                <h2>Text Box</h2>
                <Button message="About Us"/>
            </div>

            <div className={style.header2}>
                <p></p>
            </div>

        </div>

        <div className={style["text-para"]}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem magni, eligendi sapiente voluptas maiores nostrum at? Corrupti, vitae neque! Ducimus nemo, voluptatem, esse obcaecati magni laborum reprehenderit aspernatur placeat odio in earum modi eaque alias ea quam voluptatum officiis error quidem quas inventore commodi nesciunt odit. Quos cumque, doloribus nisi autem sit sapiente maiores, voluptatem quod praesentium corporis illum iusto laboriosam quibusdam voluptate blanditiis, saepe qui nesciunt ad voluptatum!</p>
        </div>

        <div className={style.circle}>
          <p></p>
        </div>

    </div>
    </>
  )
}

export default Homepage1