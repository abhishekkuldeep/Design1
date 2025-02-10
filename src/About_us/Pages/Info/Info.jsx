import style from './Info.module.css'
import img from '../../../Assets/Images/meet.jpeg'


function Info() {
  return (
    <>
    <div className={style.main}>
        <div className={style.left}>
          <img className={style.poster} src={img} alt="" />

        </div>

        <div className={style.right}>
          <div className={style.heading}>
            <h1>Lorem Ipsum</h1>
          </div>

            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur laudantium placeat obcaecati natus reiciendis. Modi, commodi quaerat? Cupiditate qui non cum architecto. Inventore, quos omnis quod nesciunt quisquam perferendis vero aperiam nostrum placeat nobis eos provident! Iste id eius exercitationem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, voluptatum. Doloremque, veritatis!</h2>

        </div>

    </div>
    </>
  )
}

export default Info