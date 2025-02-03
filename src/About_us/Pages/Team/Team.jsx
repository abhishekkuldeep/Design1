import style from './Team.module.css'
import Card from './Card'

function Team() {
  return (
    <>
    <div className={style.main}>
        <div className={style.header}>
            <h1>TEAM</h1>
            <h2>About Our Team Company</h2>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque blanditiis velit odio. Libero tempore molestiae corporis nostrum. Eveniet animi quo consequatur minus, et possimus quibusdam tenetur neque perferendis? Excepturi, maxime.</h3>

        </div>
        <div className={style.body}>
            <div className={style.blank}>

            </div>

            <div className={style.cards}>
                <Card/>
                <Card/>
                <Card/>

            </div>

        </div>

    </div>
    </>
    
  )
}

export default Team