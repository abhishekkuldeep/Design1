import style from '../Css_file/Heading.module.css'

function Heading({text}) {
  return (
    <>
    <p className={style.texts}>{text}</p>
    <div className={style.line}></div>
    </>
  )
}

export default Heading