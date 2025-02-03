import style from './Mission.module.css'

function Mission() {
  return (
    <>
    <div className={style.main}>
      <div className={style.body}>
        <div className={style.left}>
          <p>Our Mission</p>
        </div>

        <div className={style.right}>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae minus harum dolorem sed voluptas doloribus modi possimus nam perferendis, accusantium blanditiis delectus quasi eum dolorum quidem officia dignissimos magni ducimus facilis quibusdam eius aperiam! Nihil voluptate rerum quidem similique! Officia.</h1>

          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore architecto cumque ea esse cupiditate voluptatem!</h2>
        </div>


      </div>
          <div className={style.bottom}>
            <p>Offering you expert guidance and stretegic insights</p>

          </div>

    </div>

    </>
  )
}

export default Mission