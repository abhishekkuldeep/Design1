import style from '../css_file/button.module.css'

function Button({message}) {
  return (
    <div>
        <button className={style.btn}>{message}</button>
    </div>
  )
}

export default Button