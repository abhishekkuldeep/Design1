import style from './Response.module.css'

function Response() {
  return (
    <>
    <div className={style.main}>

      <div className={style.left}>
        <p className={style.headline}>Intelligent Responses</p>
        <div className={style.image}></div>
      </div>

      <div className={style.right}>
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>

        <ul className={style.points}>
          <li> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
          <li> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
          <li> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>

        </ul>

      </div>

    </div>
    </>
  )
}

export default Response