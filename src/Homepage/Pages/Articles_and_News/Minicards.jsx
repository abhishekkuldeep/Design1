import style from './Minicards.module.css'
import img from '../../../Assets/Images/meet.jpeg'

function Minicards() {
  return (
    <>

    <div className={style.main}>
      <div className={style.poster}>
        <img src={img} alt="" />
      </div>

      <div className={style.content}>
        <div className={style.headline}>
          <p>ARTICLES</p>
          <p>2 MIN</p>
        </div>

        <div className={style.headText}>
          <p>Intelligent Responses</p>
        </div>

        <div className={style.para}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, cumque expedita repellendus ducimus libero error cum voluptates illo nemo iure laboriosam aliquid vitae minima id. Perspiciatis, molestias! Cumque.</p>

        </div>

      </div>

    </div>



    {/* <div className={style.main}>
      <div className={style.image}> </div>

      <div className={style.content}>
        <div className={style.headline}>
            <h4>ARTICLES</h4>
            <h4>2 MIN</h4>
        </div>

        <div className={style.response}>
          <h2>Intelligent Response</h2>
        </div>

        <div className={style.text}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur et consequuntur facere magnam explicabo minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum corporis dicta. </p>

        </div>

      </div>

    </div> */}
    </>

  )
}

export default Minicards