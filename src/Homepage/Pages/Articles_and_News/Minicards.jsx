import style from './Minicards.module.css'
import img from '../../../Assets/Images/picture.jpg'

function Minicards() {
  return (
    <>
    <div className={style.main}>
        <img src={img} alt="" />
        <div className={style.headline}>
            <h4>ARTICLES</h4>
            <h4>2 MIN</h4>
        </div>
        <hr className={style.line}/>
        <h2>Intelligent Response</h2>
        <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur et consequuntur facere magnam explicabo minus.
        </h6>

    </div>
    </>

  )
}

export default Minicards