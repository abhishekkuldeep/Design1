import style from './Mission.module.css'
import poster from '../../../Assets/Images/meet.jpeg'

function Mission() {
  return (
    <>
    <div className={style.main}>
      <div className={style.poster}>
        <img src={poster} alt="" />
      </div>

      <div className={style.sections}>
        <div className={style.left}>
          <img src={poster} alt="" />
          <p>Our Mission</p>
        </div>

        <div className={style.right}>
          <div className={style.texts}>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae minus harum dolorem sed voluptas doloribus modi possimus nam perferendis, accusantium blanditiis delectus quasi eum dolorum quidem officia dignissimos magni ducimus facilis quibusdam eius aperiam! Nihil voluptate rerum quidem similique! Officia.</h1>
            
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore architecto cumque ea esse cupiditate voluptatem!</h2>

          </div>
        </div>

      </div>

      <div className={style.bottom}>
        <p>Offering you expert guidance and stretegic insights</p>
      </div>









      {/* <div className={style.body}>
        <div className={style.left}>
          <p>Our Mission</p>
        </div>

        <div className={style.right}>

        </div>


      </div>
          <div className={style.bottom}>

          </div> */}

    </div>

    </>
  )
}

export default Mission