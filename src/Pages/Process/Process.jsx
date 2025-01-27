import DropdownMenu from '../../Components/DropdownMenu'
import style from '../Process/process.module.css'

function Homepage4() {
  return (
    <>
        <div className={style.body}>
          <div className={style.main}>
            <div className={style.image}>
              <p>Our Process</p>
            </div>

            <div className={style.dropDown}>
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