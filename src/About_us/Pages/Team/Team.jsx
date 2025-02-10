import style from './Team.module.css'
import Card from './Card'
import Heading from '../../../Components/Heading'

function Team() {
  return (
    <>
    <div className={style.main}>
        <div className={style.header}>
            <div className={style.heading}> <Heading text="TEAM"/> </div>
            <h2>About Our Team Company</h2>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque blanditiis velit odio. Libero tempore molestiae corporis nostrum. Eveniet animi quo consequatur minus, et possimus quibusdam tenetur neque perferendis? Excepturi, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sint.</h3>

        </div>
        <div className={style.body}>
            <div className={style.blank}>

            </div>

            <div className={style.cards}>
                <Card/>
                <Card/>
                <Card/>
                <div className={style.lastCard}><Card/></div>

            </div>

        </div>

    </div>
    </>
    
  )
}

export default Team