import style from './Info.module.css'

function Info() {
  return (
    <>
    <div className={style.main}>
      <div className={style.body}>
        <div className={style.texts}>
          <h1>Text Box</h1>
          <h2>text box</h2>
          <p className={style.bodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora autem blanditiis eligendi eaque eveniet. Quas, id? Eveniet enim consequatur eligendi impedit non velit quisquam, nisi, voluptas ipsa perspiciatis accusantium rem praesentium itaque deleniti alias, quaerat incidunt amet numquam eos ducimus nesciunt sed temporibus dignissimos. Laudantium, dolorem itaque! Nobis, magni.</p>
          <div className={style.button}>
            <p className={style.btn1}>JOIN US</p>
            <p className={style.btn2}>JOIN US</p>

          </div>

        </div>

      </div>
    
        

       
    </div>
    </>
  )
}

export default Info