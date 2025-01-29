import img from '../../Assets/Images/picture.jpg'
import style from './Info.module.css'

function Info() {
  return (
    <>
    <div className={style.main}>
    
        <div className={style.image}>
            <img src={img} alt="" />
        </div>
        <div className={style.content}>
            hello
        </div>

       
    </div>
    </>
  )
}

export default Info