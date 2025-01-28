import style from '../css_file/Heading.module.css'

function Heading({text}) {
  return (
    <>
    <div>
    <h1 className={style.text}>{text}</h1>
    <hr className={style.line} />
    </div>
    </>
  )
}

export default Heading