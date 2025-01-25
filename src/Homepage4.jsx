import DropdownMenu from "./Components/DropdownMenu"
import style from './css_file/homepage4.module.css'

function Homepage4() {
  return (
    <>
        <div className={style.body}>
          <div className={style.main}>
            <div className={style.image}>
              <p>Our Process</p>
            </div>

            <div className={style["drop-down"]}>
              <DropdownMenu/>
              <DropdownMenu/>
              <DropdownMenu/>
            </div>

          </div>

        </div>
    </>
  )
}

export default Homepage4