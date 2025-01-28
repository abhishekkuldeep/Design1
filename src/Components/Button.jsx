import style from '../Css_file/Button.module.css'

function Button({message}) {
  return (
    <div>
        <button className={style.btn}>{message}</button>
    </div>
  )
}

export default Button