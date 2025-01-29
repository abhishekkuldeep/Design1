import style from './Articles.module.css'
import Heading from '../../Components/Heading'
import Cards from './Minicards'

function Articles() {
  return (
    <>
        <div className={style.main}>
            <p>
                <Heading text="ARTICLES AND NEWS"/>
            </p>
            <div className={style.body}>
                <div className={style.boxes}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
                <h3>
                    More
                </h3>

            </div>

        </div>
    </>
  )
}

export default Articles