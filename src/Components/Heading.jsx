import style from '../css_file/heading.module.css'

function Heading({text}) {
  return (
    <>
    <div>
    <h1 className={style["heading-txt"]}>{text}</h1>
    <hr className={style["line"]} />
    </div>
    </>
  )
}

export default Heading