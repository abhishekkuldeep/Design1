import style from './Minicards.module.css'

function Minicards() {
  return (
    <>
    <div className={style.main}>
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

    </div>
    </>

  )
}

export default Minicards