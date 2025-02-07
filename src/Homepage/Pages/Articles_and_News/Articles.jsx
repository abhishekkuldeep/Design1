import style from './Articles.module.css'
import Heading from '../../../Components/Heading'
import Cards from './Minicards'

function Articles() {
  return (
    <>
        <div className={style.main}>
            <div className={style.heading}>
                <Heading text="ARTICLES AND NEWS"/>
            </div>
            <div className={style.boxes}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
            </div>
            <div className={style.more}>
                <p>MORE</p>
            </div>

        </div>
    </>
  )
}

export default Articles